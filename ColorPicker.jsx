import { useState } from "react";

function ColorPicker() {
  const [Color, setColor] = useState("#ffffff");

  return (
    <>
      <div style={styles.container}>
        <div style={{ ...styles.colorBox, backgroundColor: Color }}>
          {/* Input Field for Color */}
          <input 
            type="color" 
            value={Color} 
            onChange={(event) => setColor(event.target.value)} 
            style={styles.colorInput}
          />

          {/* Display the Color Code */}
          <div style={styles.colorCode}>
            {Color}
          </div>
        </div>
      </div>
    </>
  );
}

// Styles object
const styles = {
  container: {
    display: "flex", // Flexbox for centering
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f7f7f7", // Light background
  },
  colorBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    height: "250px",
    borderRadius: "15px", // Rounded corners for color box
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Slight shadow for a pop-out effect
    margin: "20px",
  },
  colorInput: {
    width: "80%", // Color picker size
    marginBottom: "20px", // Spacing between picker and color code
    padding: "10px", // Padding for better feel
    cursor: "pointer", // Hand cursor when hovering over the input
  },
  colorCode: {
    fontSize: "18px", // Make the text a bit larger
    fontWeight: "bold", // Bold the color code text
    color: "#333", // Darker text color for readability
  }
};

export default ColorPicker;
