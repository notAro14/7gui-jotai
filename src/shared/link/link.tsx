import { styled } from "src/lib/stitches.config"

const Link = styled("a", {
  "fontFamily": "$main",
  "color": "$lo-text",
  "&:visited": {
    color: "$plum11",
  },
})

export default Link
