// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/dagw/component/avatar/v1/plugin.proto (package bilibili.dagw.component.avatar.v1.plugin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ColorConfig } from "../common/common_pb.js";

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.CommentDoubleClickConfig
 */
export const CommentDoubleClickConfig = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.CommentDoubleClickConfig",
  () => [
    { no: 1, name: "interaction", kind: "message", T: Interaction },
    { no: 2, name: "animation_scale", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.GyroConfig
 */
export const GyroConfig = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.GyroConfig",
  () => [
    { no: 1, name: "gyroscope", kind: "message", T: NFTImageV2 },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.GyroscopeContentV2
 */
export const GyroscopeContentV2 = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.GyroscopeContentV2",
  () => [
    { no: 1, name: "file_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "scale", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "physical_orientation", kind: "message", T: PhysicalOrientationV2, repeated: true },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.GyroscopeEntityV2
 */
export const GyroscopeEntityV2 = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.GyroscopeEntityV2",
  () => [
    { no: 1, name: "display_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "contents", kind: "message", T: GyroscopeContentV2, repeated: true },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.Interaction
 */
export const Interaction = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.Interaction",
  () => [
    { no: 1, name: "nft_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "itype", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "metadata_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.LiveAnimeConfig
 */
export const LiveAnimeConfig = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.LiveAnimeConfig",
  () => [
    { no: 1, name: "is_live", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.LiveAnimeItem
 */
export const LiveAnimeItem = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.LiveAnimeItem",
  () => [
    { no: 1, name: "color", kind: "message", T: ColorConfig },
    { no: 2, name: "start_ratio", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "end_ratio", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "start_stroke", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "start_opacity", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 6, name: "phase", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.NFTImageV2
 */
export const NFTImageV2 = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.NFTImageV2",
  () => [
    { no: 1, name: "gyroscope", kind: "message", T: GyroscopeEntityV2, repeated: true },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationAnimation
 */
export const PhysicalOrientationAnimation = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationAnimation",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bezier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationV2
 */
export const PhysicalOrientationV2 = proto3.makeMessageType(
  "bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationV2",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "animations", kind: "message", T: PhysicalOrientationAnimation, repeated: true },
  ],
);

