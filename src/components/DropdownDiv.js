import { memo, useMemo } from "react";
import "./Dropdown.css";

const DropdownDiv = memo(
  ({
    dropdownDisplay,
    dropdownFlexDirection,
    dropdownPosition,
    dropdownTop,
    dropdownLeft,
    dopdownPosition,
    dopdownHeight,
    dopdownWidth,
    dopdownTop,
    dopdownLeft,
    dopdownFontSize,
    dopdownFontWeight,
    dopdownFontFamily,
    dopdownColor,
    dopdownTextAlign,
    dopdownDisplay,
    pRODUCT1Position,
    pRODUCT1Height,
    pRODUCT1Width,
    pRODUCT1Top,
    pRODUCT1Left,
    pRODUCT1FontSize,
    pRODUCT1FontWeight,
    pRODUCT1FontFamily,
    pRODUCT1Color,
    pRODUCT1TextAlign,
    pRODUCT1Display,
    pRODUCT2Position,
    pRODUCT2Height,
    pRODUCT2Width,
    pRODUCT2Top,
    pRODUCT2Left,
    pRODUCT2FontSize,
    pRODUCT2FontWeight,
    pRODUCT2FontFamily,
    pRODUCT2Color,
    pRODUCT2TextAlign,
    pRODUCT2Display,
    pRODUCT3Position,
    pRODUCT3Height,
    pRODUCT3Width,
    pRODUCT3Top,
    pRODUCT3Left,
    pRODUCT3FontSize,
    pRODUCT3FontWeight,
    pRODUCT3FontFamily,
    pRODUCT3Color,
    pRODUCT3TextAlign,
    pRODUCT3Display,
  }) => {
    const dropdownStyle = useMemo(() => {
      return {
        display: dropdownDisplay,
        flexDirection: dropdownFlexDirection,
        position: dropdownPosition,
        top: dropdownTop,
        left: dropdownLeft,
      };
    }, [
      dropdownDisplay,
      dropdownFlexDirection,
      dropdownPosition,
      dropdownTop,
      dropdownLeft,
    ]);

    const dopdownStyle = useMemo(() => {
      return {
        position: dopdownPosition,
        height: dopdownHeight,
        width: dopdownWidth,
        top: dopdownTop,
        left: dopdownLeft,
        fontSize: dopdownFontSize,
        fontWeight: dopdownFontWeight,
        fontFamily: dopdownFontFamily,
        color: dopdownColor,
        textAlign: dopdownTextAlign,
        display: dopdownDisplay,
      };
    }, [
      dopdownPosition,
      dopdownHeight,
      dopdownWidth,
      dopdownTop,
      dopdownLeft,
      dopdownFontSize,
      dopdownFontWeight,
      dopdownFontFamily,
      dopdownColor,
      dopdownTextAlign,
      dopdownDisplay,
    ]);

    const pRODUCT1Style = useMemo(() => {
      return {
        position: pRODUCT1Position,
        height: pRODUCT1Height,
        width: pRODUCT1Width,
        top: pRODUCT1Top,
        left: pRODUCT1Left,
        fontSize: pRODUCT1FontSize,
        fontWeight: pRODUCT1FontWeight,
        fontFamily: pRODUCT1FontFamily,
        color: pRODUCT1Color,
        textAlign: pRODUCT1TextAlign,
        display: pRODUCT1Display,
      };
    }, [
      pRODUCT1Position,
      pRODUCT1Height,
      pRODUCT1Width,
      pRODUCT1Top,
      pRODUCT1Left,
      pRODUCT1FontSize,
      pRODUCT1FontWeight,
      pRODUCT1FontFamily,
      pRODUCT1Color,
      pRODUCT1TextAlign,
      pRODUCT1Display,
    ]);

    const pRODUCT2Style = useMemo(() => {
      return {
        position: pRODUCT2Position,
        height: pRODUCT2Height,
        width: pRODUCT2Width,
        top: pRODUCT2Top,
        left: pRODUCT2Left,
        fontSize: pRODUCT2FontSize,
        fontWeight: pRODUCT2FontWeight,
        fontFamily: pRODUCT2FontFamily,
        color: pRODUCT2Color,
        textAlign: pRODUCT2TextAlign,
        display: pRODUCT2Display,
      };
    }, [
      pRODUCT2Position,
      pRODUCT2Height,
      pRODUCT2Width,
      pRODUCT2Top,
      pRODUCT2Left,
      pRODUCT2FontSize,
      pRODUCT2FontWeight,
      pRODUCT2FontFamily,
      pRODUCT2Color,
      pRODUCT2TextAlign,
      pRODUCT2Display,
    ]);

    const pRODUCT3Style = useMemo(() => {
      return {
        position: pRODUCT3Position,
        height: pRODUCT3Height,
        width: pRODUCT3Width,
        top: pRODUCT3Top,
        left: pRODUCT3Left,
        fontSize: pRODUCT3FontSize,
        fontWeight: pRODUCT3FontWeight,
        fontFamily: pRODUCT3FontFamily,
        color: pRODUCT3Color,
        textAlign: pRODUCT3TextAlign,
        display: pRODUCT3Display,
      };
    }, [
      pRODUCT3Position,
      pRODUCT3Height,
      pRODUCT3Width,
      pRODUCT3Top,
      pRODUCT3Left,
      pRODUCT3FontSize,
      pRODUCT3FontWeight,
      pRODUCT3FontFamily,
      pRODUCT3Color,
      pRODUCT3TextAlign,
      pRODUCT3Display,
    ]);

    return (
      <div className="dropdown" style={dropdownStyle}>
        <div className="dopdown" style={dopdownStyle}>
          Dopdown
        </div>
        <div className="product-1" style={pRODUCT1Style}>
          PRODUCT 1
        </div>
        <div className="product-2" style={pRODUCT2Style}>
          PRODUCT 2
        </div>
        <div className="product-3" style={pRODUCT3Style}>
          PRODUCT 3
        </div>
        <div className="product-4">PRODUCT 4</div>
        <div className="dropdown-child" />
      </div>
    );
  }
);

export default DropdownDiv;
