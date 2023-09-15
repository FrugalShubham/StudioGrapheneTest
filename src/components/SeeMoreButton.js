import { memo, useMemo } from "react";
import "./SeeMoreButton.css";

const SeeMoreButton = memo(
  ({
    primaryButtonDisplay,
    primaryButtonFlexDirection,
    primaryButtonAlignItems,
    primaryButtonJustifyContent,
    primaryButtonGap,
    primaryButtonPosition,
    primaryButtonTop,
    primaryButtonLeft,
  }) => {
    const primaryButtonStyle = useMemo(() => {
      return {
        display: primaryButtonDisplay,
        flexDirection: primaryButtonFlexDirection,
        alignItems: primaryButtonAlignItems,
        justifyContent: primaryButtonJustifyContent,
        gap: primaryButtonGap,
        position: primaryButtonPosition,
        top: primaryButtonTop,
        left: primaryButtonLeft,
      };
    }, [
      primaryButtonDisplay,
      primaryButtonFlexDirection,
      primaryButtonAlignItems,
      primaryButtonJustifyContent,
      primaryButtonGap,
      primaryButtonPosition,
      primaryButtonTop,
      primaryButtonLeft,
    ]);

    return (
      <div className="primary-button" style={primaryButtonStyle}>
        <div className="frame-parent">
          <div className="see-more-wrapper">
            <div className="see-more">See more</div>
          </div>
          <img className="vector-icon3" alt="" src="/vector.svg" />
        </div>
        <div className="primary-button-child" />
      </div>
    );
  }
);

export default SeeMoreButton;
