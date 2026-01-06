import React, { useEffect, useState, useRef } from 'react';

interface LineGraphProps {
  /** 线性方程的斜率 k (y = kx + b) */
  k?: number;
  /** 线性方程的截距 b (y = kx + b) */
  b?: number;
  /** 图形宽度 */
  width?: number;
  /** 图形高度 */
  height?: number;
  /** 直线颜色 */
  lineColor?: string;
  /** 是否显示动画 */
  animate?: boolean;
  /** 动画持续时间(ms) */
  animationDuration?: number;
  /** 是否显示网格 */
  showGrid?: boolean;
  /** 是否显示数据点 */
  showPoints?: boolean;
  /** 坐标轴范围 */
  range?: number;
  /** 额外的直线（用于比较） */
  extraLines?: Array<{ k: number; b: number; color: string; dashed?: boolean }>;
  /** 动画模式: 'line' = 直接画线, 'discover' = 先显示点再连线 */
  animationMode?: 'line' | 'discover';
  /** 公式文本（用于discover模式最后显示） */
  formulaText?: string;
  /** 公式显示回调 */
  onFormulaReveal?: () => void;
}

export function LineGraph({
  k = 1,
  b = 0,
  width = 300,
  height = 300,
  lineColor = '#3b82f6',
  animate = true,
  animationDuration = 1500,
  showGrid = true,
  showPoints = false,
  range = 5,
  extraLines = [],
  animationMode = 'line',
  onFormulaReveal,
}: LineGraphProps) {
  // 动画阶段: 0=初始, 1=显示点, 2=画线, 3=完成
  const [phase, setPhase] = useState(animate ? 0 : 3);
  const [pointsProgress, setPointsProgress] = useState(animate ? 0 : 1);
  const [lineProgress, setLineProgress] = useState(animate ? 0 : 1);
  const animationRef = useRef<number | null>(null);

  // discover 模式的数据点
  const dataPointsForDiscovery = [];
  for (let x = -range + 1; x < range; x++) {
    const y = k * x + b;
    if (y >= -range && y <= range) {
      dataPointsForDiscovery.push({ x, y });
    }
  }

  // 动画效果
  useEffect(() => {
    if (!animate) {
      setPhase(3);
      setPointsProgress(1);
      setLineProgress(1);
      return;
    }

    setPhase(0);
    setPointsProgress(0);
    setLineProgress(0);

    if (animationMode === 'discover') {
      // discover 模式：先显示点，再画线
      const pointsDuration = animationDuration * 0.6;
      const lineDuration = animationDuration * 0.4;
      let startTime: number | null = null;

      const animateDiscover = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        if (elapsed < pointsDuration) {
          // 阶段1：逐个显示点
          setPhase(1);
          const progress = elapsed / pointsDuration;
          const eased = 1 - Math.pow(1 - progress, 2);
          setPointsProgress(eased);
          animationRef.current = requestAnimationFrame(animateDiscover);
        } else if (elapsed < pointsDuration + lineDuration) {
          // 阶段2：画线连接点
          setPhase(2);
          setPointsProgress(1);
          const lineElapsed = elapsed - pointsDuration;
          const progress = lineElapsed / lineDuration;
          const eased = 1 - Math.pow(1 - progress, 3);
          setLineProgress(eased);
          animationRef.current = requestAnimationFrame(animateDiscover);
        } else {
          // 阶段3：完成
          setPhase(3);
          setPointsProgress(1);
          setLineProgress(1);
          onFormulaReveal?.();
        }
      };

      // 延迟开始，让用户先看到空坐标系
      setTimeout(() => {
        animationRef.current = requestAnimationFrame(animateDiscover);
      }, 300);
    } else {
      // line 模式：直接画线
      let startTime: number | null = null;

      const animateLine = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setLineProgress(eased);
        setPointsProgress(eased);
        setPhase(progress < 1 ? 2 : 3);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animateLine);
        }
      };

      animationRef.current = requestAnimationFrame(animateLine);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, animationDuration, animationMode, k, b, onFormulaReveal]);

  // 坐标转换函数
  const padding = 40;
  const graphWidth = width - padding * 2;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = graphWidth / (range * 2);

  const toScreenX = (x: number) => centerX + x * scale;
  const toScreenY = (y: number) => centerY - y * scale;

  // 计算直线端点（限制在可见范围内）
  const getLinePoints = (slope: number, intercept: number) => {
    const x1 = -range;
    const y1 = slope * x1 + intercept;
    const x2 = range;
    const y2 = slope * x2 + intercept;

    // 裁剪到可见范围
    const clipLine = (x1: number, y1: number, x2: number, y2: number) => {
      // 简单裁剪，只考虑y范围
      const clampY = (x: number, y: number, otherX: number, otherY: number) => {
        if (y > range) {
          const t = (range - otherY) / (y - otherY);
          return { x: otherX + t * (x - otherX), y: range };
        }
        if (y < -range) {
          const t = (-range - otherY) / (y - otherY);
          return { x: otherX + t * (x - otherX), y: -range };
        }
        return { x, y };
      };

      const p1 = clampY(x1, y1, x2, y2);
      const p2 = clampY(x2, y2, x1, y1);

      return { p1, p2 };
    };

    return clipLine(x1, y1, x2, y2);
  };

  const mainLine = getLinePoints(k, b);

  // 生成网格线
  const gridLines = [];
  if (showGrid) {
    for (let i = -range; i <= range; i++) {
      if (i === 0) continue;
      // 垂直线
      gridLines.push(
        <line
          key={`v${i}`}
          x1={toScreenX(i)}
          y1={toScreenY(-range)}
          x2={toScreenX(i)}
          y2={toScreenY(range)}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
      // 水平线
      gridLines.push(
        <line
          key={`h${i}`}
          x1={toScreenX(-range)}
          y1={toScreenY(i)}
          x2={toScreenX(range)}
          y2={toScreenY(i)}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      );
    }
  }

  // 生成刻度标签
  const tickLabels = [];
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    // X轴标签
    tickLabels.push(
      <text
        key={`xl${i}`}
        x={toScreenX(i)}
        y={toScreenY(0) + 16}
        textAnchor="middle"
        fontSize="10"
        fill="#94a3b8"
      >
        {i}
      </text>
    );
    // Y轴标签
    tickLabels.push(
      <text
        key={`yl${i}`}
        x={toScreenX(0) - 10}
        y={toScreenY(i) + 4}
        textAnchor="end"
        fontSize="10"
        fill="#94a3b8"
      >
        {i}
      </text>
    );
  }

  // 计算动画中的线段端点
  const animatedX2 = mainLine.p1.x + (mainLine.p2.x - mainLine.p1.x) * lineProgress;
  const animatedY2 = mainLine.p1.y + (mainLine.p2.y - mainLine.p1.y) * lineProgress;

  // 生成数据点 (discover 模式)
  const discoverPoints: React.ReactNode[] = [];
  if (animationMode === 'discover' && phase >= 1) {
    const visibleCount = Math.floor(dataPointsForDiscovery.length * pointsProgress);
    dataPointsForDiscovery.forEach((point, index) => {
      if (index < visibleCount) {
        // 每个点有自己的出现动画
        const pointDelay = index / dataPointsForDiscovery.length;
        const pointProgress = Math.min((pointsProgress - pointDelay) / (1 / dataPointsForDiscovery.length), 1);
        const scale = Math.max(0, pointProgress);

        discoverPoints.push(
          <g key={`dp${index}`}>
            {/* 点出现时的光晕效果 */}
            <circle
              cx={toScreenX(point.x)}
              cy={toScreenY(point.y)}
              r={12 * scale}
              fill={lineColor}
              opacity={0.2 * (1 - scale * 0.5)}
            />
            {/* 实际的点 */}
            <circle
              cx={toScreenX(point.x)}
              cy={toScreenY(point.y)}
              r={6 * Math.min(scale * 1.2, 1)}
              fill={lineColor}
              style={{
                filter: scale < 1 ? 'drop-shadow(0 0 4px ' + lineColor + ')' : 'none',
              }}
            />
            {/* 坐标标签 */}
            {phase >= 2 && (
              <text
                x={toScreenX(point.x) + 8}
                y={toScreenY(point.y) - 8}
                fontSize="9"
                fill="#64748b"
                opacity={lineProgress}
              >
                ({point.x},{point.y})
              </text>
            )}
          </g>
        );
      }
    });
  }

  // 生成数据点 (line 模式)
  const linePoints = [];
  if (animationMode === 'line' && showPoints && lineProgress > 0.5) {
    const pointOpacity = Math.min((lineProgress - 0.5) * 2, 1);
    for (let x = -range + 1; x < range; x++) {
      const y = k * x + b;
      if (y >= -range && y <= range) {
        linePoints.push(
          <circle
            key={`p${x}`}
            cx={toScreenX(x)}
            cy={toScreenY(y)}
            r="4"
            fill={lineColor}
            opacity={pointOpacity}
          >
            <title>({x}, {y})</title>
          </circle>
        );
      }
    }
  }

  return (
    <svg width={width} height={height} style={{ backgroundColor: 'white', borderRadius: '8px' }}>
      {/* 网格 */}
      {gridLines}

      {/* 坐标轴 */}
      <line
        x1={toScreenX(-range)}
        y1={toScreenY(0)}
        x2={toScreenX(range)}
        y2={toScreenY(0)}
        stroke="#475569"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <line
        x1={toScreenX(0)}
        y1={toScreenY(-range)}
        x2={toScreenX(0)}
        y2={toScreenY(range)}
        stroke="#475569"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* 箭头定义 */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
        </marker>
      </defs>

      {/* 轴标签 */}
      <text
        x={toScreenX(range) - 5}
        y={toScreenY(0) - 10}
        fontSize="14"
        fontWeight="bold"
        fill="#475569"
      >
        x
      </text>
      <text
        x={toScreenX(0) + 10}
        y={toScreenY(range) + 5}
        fontSize="14"
        fontWeight="bold"
        fill="#475569"
      >
        y
      </text>

      {/* 刻度标签 */}
      {tickLabels}

      {/* 额外的参考线 */}
      {extraLines.map((line, index) => {
        const points = getLinePoints(line.k, line.b);
        return (
          <line
            key={`extra${index}`}
            x1={toScreenX(points.p1.x)}
            y1={toScreenY(points.p1.y)}
            x2={toScreenX(points.p2.x)}
            y2={toScreenY(points.p2.y)}
            stroke={line.color}
            strokeWidth="2"
            strokeDasharray={line.dashed ? '5,5' : undefined}
            opacity="0.5"
          />
        );
      })}

      {/* discover 模式的数据点 */}
      {discoverPoints}

      {/* 主直线（带动画）- 在 discover 模式下，phase >= 2 才显示 */}
      {(animationMode === 'line' || phase >= 2) && lineProgress > 0 && (
        <line
          x1={toScreenX(mainLine.p1.x)}
          y1={toScreenY(mainLine.p1.y)}
          x2={toScreenX(animatedX2)}
          y2={toScreenY(animatedY2)}
          stroke={lineColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}

      {/* 动画头部的点 */}
      {animate && lineProgress > 0 && lineProgress < 1 && (animationMode === 'line' || phase >= 2) && (
        <circle
          cx={toScreenX(animatedX2)}
          cy={toScreenY(animatedY2)}
          r="5"
          fill={lineColor}
        />
      )}

      {/* line 模式的数据点 */}
      {linePoints}

      {/* 原点标记 */}
      <circle cx={toScreenX(0)} cy={toScreenY(0)} r="3" fill="#475569" />
      <text
        x={toScreenX(0) - 12}
        y={toScreenY(0) + 16}
        fontSize="10"
        fill="#94a3b8"
      >
        O
      </text>
    </svg>
  );
}
