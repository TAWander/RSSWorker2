// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/polymer/demo/demo.proto (package bilibili.polymer.demo, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message bilibili.polymer.demo.HelloWorldReq
 */
export const HelloWorldReq = proto3.makeMessageType(
  "bilibili.polymer.demo.HelloWorldReq",
  () => [
    { no: 1, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.polymer.demo.HelloWorldResp
 */
export const HelloWorldResp = proto3.makeMessageType(
  "bilibili.polymer.demo.HelloWorldResp",
  () => [
    { no: 1, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

