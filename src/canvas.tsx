import type React from "react";
import { CanvasHTMLAttributes, useEffect, useRef } from "react";
import classnames from "classnames";
import classes from "./canvas.css";

export const Canvas: React.VFC<CanvasHTMLAttributes<HTMLCanvasElement>> = ({
  className,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current
        .getContext("2d")
        ?.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={classnames(classes.canvas, className)}
      {...props}
      id="canvas"
    />
  );
};
