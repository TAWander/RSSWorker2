// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/mine/v1/mine.proto (package bilibili.app.mine.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Paragraph } from "../../dynamic/v2/dynamic_pb.js";

/**
 *
 *
 * @generated from enum bilibili.app.mine.v1.ArcState
 */
export const ArcState = proto3.makeEnum(
  "bilibili.app.mine.v1.ArcState",
  [
    {no: 0, name: "STATE_UNKNOWN"},
    {no: 1, name: "OPEN"},
    {no: 2, name: "ORANGE"},
    {no: 3, name: "WAIT"},
    {no: 4, name: "RECICLE"},
    {no: 5, name: "LOCK"},
    {no: 6, name: "FIXED"},
    {no: 7, name: "USER_DELAY"},
    {no: 8, name: "FAST_PUB"},
    {no: 9, name: "XCODE_FAIL"},
  ],
);

/**
 *
 *
 * @generated from enum bilibili.app.mine.v1.CardType
 */
export const CardType = proto3.makeEnum(
  "bilibili.app.mine.v1.CardType",
  [
    {no: 0, name: "CARD_UNKNOWN"},
    {no: 1, name: "PUBGUIDE"},
    {no: 2, name: "UGC"},
    {no: 3, name: "OPUS"},
    {no: 4, name: "MORE"},
  ],
);

/**
 *
 *
 * @generated from enum bilibili.app.mine.v1.OpusState
 */
export const OpusState = proto3.makeEnum(
  "bilibili.app.mine.v1.OpusState",
  [
    {no: 0, name: "OPUS_UNKNOWN"},
    {no: 1, name: "OPUS_OPEN"},
    {no: 2, name: "OPUS_NO_FORWARD"},
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.Arc
 */
export const Arc = proto3.makeMessageType(
  "bilibili.app.mine.v1.Arc",
  () => [
    { no: 1, name: "date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "stat", kind: "message", T: Stat },
    { no: 3, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "aid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "cid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "state", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.Button
 */
export const Button = proto3.makeMessageType(
  "bilibili.app.mine.v1.Button",
  () => [
    { no: 1, name: "light_icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dark_icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.CardMore
 */
export const CardMore = proto3.makeMessageType(
  "bilibili.app.mine.v1.CardMore",
  () => [
    { no: 1, name: "button", kind: "message", T: Button },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.CardOpus
 */
export const CardOpus = proto3.makeMessageType(
  "bilibili.app.mine.v1.CardOpus",
  () => [
    { no: 1, name: "word_paragraph", kind: "message", T: Paragraph },
    { no: 2, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "stat_title", kind: "message", T: SubTitleWithStat },
    { no: 5, name: "stat", kind: "message", T: Stat },
    { no: 6, name: "date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "dyn_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "has_share", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "state", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.CardPubGuide
 */
export const CardPubGuide = proto3.makeMessageType(
  "bilibili.app.mine.v1.CardPubGuide",
  () => [
    { no: 1, name: "title", kind: "message", T: Title },
    { no: 2, name: "button", kind: "message", T: Button },
    { no: 3, name: "material", kind: "message", T: PubGuideMaterial, repeated: true },
    { no: 4, name: "more_button", kind: "message", T: Button },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.CardUGC
 */
export const CardUGC = proto3.makeMessageType(
  "bilibili.app.mine.v1.CardUGC",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title_color", kind: "message", T: Color },
    { no: 3, name: "button_title", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "subtitle" },
    { no: 4, name: "stat_title", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "subtitle" },
    { no: 5, name: "arc", kind: "message", T: Arc },
    { no: 6, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "has_share", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.Color
 */
export const Color = proto3.makeMessageType(
  "bilibili.app.mine.v1.Color",
  () => [
    { no: 1, name: "light_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dark_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.PubCard
 */
export const PubCard = proto3.makeMessageType(
  "bilibili.app.mine.v1.PubCard",
  () => [
    { no: 1, name: "pub_guide", kind: "message", T: CardPubGuide, oneof: "card" },
    { no: 2, name: "ugc", kind: "message", T: CardUGC, oneof: "card" },
    { no: 3, name: "opus", kind: "message", T: CardOpus, oneof: "card" },
    { no: 4, name: "more", kind: "message", T: CardMore, oneof: "card" },
    { no: 5, name: "card_type", kind: "enum", T: proto3.getEnumType(CardType) },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.PubGuideMaterial
 */
export const PubGuideMaterial = proto3.makeMessageType(
  "bilibili.app.mine.v1.PubGuideMaterial",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "title", kind: "message", T: Title },
    { no: 3, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.PubModuleReq
 */
export const PubModuleReq = proto3.makeMessageType(
  "bilibili.app.mine.v1.PubModuleReq",
  () => [
    { no: 1, name: "user_original_state", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "dyn_ids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "card_num", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.PubModuleResp
 */
export const PubModuleResp = proto3.makeMessageType(
  "bilibili.app.mine.v1.PubModuleResp",
  () => [
    { no: 1, name: "pub_card", kind: "message", T: PubCard, repeated: true },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.Stat
 */
export const Stat = proto3.makeMessageType(
  "bilibili.app.mine.v1.Stat",
  () => [
    { no: 1, name: "play_icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "play", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "like_icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "like", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.SubTitleWithButton
 */
export const SubTitleWithButton = proto3.makeMessageType(
  "bilibili.app.mine.v1.SubTitleWithButton",
  () => [
    { no: 1, name: "icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "background_color", kind: "message", T: Color },
    { no: 4, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "text_color", kind: "message", T: Color },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.SubTitleWithStat
 */
export const SubTitleWithStat = proto3.makeMessageType(
  "bilibili.app.mine.v1.SubTitleWithStat",
  () => [
    { no: 1, name: "icon", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 *
 *
 * @generated from message bilibili.app.mine.v1.Title
 */
export const Title = proto3.makeMessageType(
  "bilibili.app.mine.v1.Title",
  () => [
    { no: 1, name: "main", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sub", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

