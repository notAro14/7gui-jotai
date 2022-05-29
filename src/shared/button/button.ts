import { styled } from "src/lib/stitches.config"

const Button = styled("button", {
  "border": "none",
  "borderRadius": "$md",
  "px": "$xs",
  "py": "$xxs",
  "fontSize": "$sm",
  "fontFamily": "$main",
  "backgroundColor": "$solid",
  "color": "$hi-text",
  "&:hover": {
    backgroundColor: "$solid-hovered",
    cursor: "pointer",
  },
  "variants": {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
})

export default Button
