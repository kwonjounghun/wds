// src/types.ts
var WaffleInputStatus;
(function(WaffleInputStatus2) {
  WaffleInputStatus2[WaffleInputStatus2["success"] = 0] = "success";
  WaffleInputStatus2[WaffleInputStatus2["error"] = 1] = "error";
  WaffleInputStatus2[WaffleInputStatus2["loading"] = 2] = "loading";
})(WaffleInputStatus || (WaffleInputStatus = {}));
var WaffleElementSize;
(function(WaffleElementSize2) {
  WaffleElementSize2[WaffleElementSize2["small"] = 0] = "small";
  WaffleElementSize2[WaffleElementSize2["medium"] = 1] = "medium";
  WaffleElementSize2[WaffleElementSize2["large"] = 2] = "large";
})(WaffleElementSize || (WaffleElementSize = {}));
var WaffleColorType;
(function(WaffleColorType2) {
  WaffleColorType2[WaffleColorType2["primary"] = 0] = "primary";
  WaffleColorType2[WaffleColorType2["info"] = 1] = "info";
  WaffleColorType2[WaffleColorType2["danger"] = 2] = "danger";
})(WaffleColorType || (WaffleColorType = {}));
var WaffleIconPosition;
(function(WaffleIconPosition2) {
  WaffleIconPosition2[WaffleIconPosition2["left"] = 0] = "left";
  WaffleIconPosition2[WaffleIconPosition2["right"] = 1] = "right";
})(WaffleIconPosition || (WaffleIconPosition = {}));
var WaffleVariant;
(function(WaffleVariant2) {
  WaffleVariant2[WaffleVariant2["outlined"] = 0] = "outlined";
  WaffleVariant2[WaffleVariant2["contained"] = 1] = "contained";
  WaffleVariant2[WaffleVariant2["text"] = 2] = "text";
})(WaffleVariant || (WaffleVariant = {}));
export {
  WaffleColorType,
  WaffleElementSize,
  WaffleIconPosition,
  WaffleInputStatus,
  WaffleVariant
};
