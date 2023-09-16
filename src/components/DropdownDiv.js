import { memo, useEffect, useMemo, useState } from "react";
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

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      // Define the API URL
      const apiUrl = "https://fakestoreapi.com/products/categories";

      // Fetch the data from the API
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data); // Update the state with the fetched data
          setLoading(false); // Set loading to false
        })
        .catch((error) => {
          setError(error); // Set error state if there's an issue
          setLoading(false); // Set loading to false
        });
    }, []); // The empty dependency array ensures this effect runs once on component mount

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <>
        <select
          className="dropdown dropdown-content"
          placeholder="Products"
          style={dropdownStyle}
        >
          <option value="volvo" style={pRODUCT1Style}>
            Products
          </option>
          {data.map((product, idx) => (
            <option key={idx} value="volvo" style={pRODUCT1Style}>
              {product}
            </option>
          ))}
          <div className="dropdown-child" />
        </select>
      </>
    );
  }
);

export default DropdownDiv;
