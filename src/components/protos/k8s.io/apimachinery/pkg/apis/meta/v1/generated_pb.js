// source: k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_generated_pb);
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_schema_generated_pb);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.List', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs', null, global);
goog.exportSymbol('proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.List, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.List';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.repeatedFields_, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.displayName = 'proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    versionsList: jspb.Message.toObjectList(msg.getVersionsList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.toObject, includeInstance),
    preferredversion: (f = msg.getPreferredversion()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.toObject(includeInstance, f),
    serveraddressbyclientcidrsList: jspb.Message.toObjectList(msg.getServeraddressbyclientcidrsList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.deserializeBinaryFromReader);
      msg.addVersions(value);
      break;
    case 3:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.deserializeBinaryFromReader);
      msg.setPreferredversion(value);
      break;
    case 4:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.deserializeBinaryFromReader);
      msg.addServeraddressbyclientcidrs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.serializeBinaryToWriter
    );
  }
  f = message.getPreferredversion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.serializeBinaryToWriter
    );
  }
  f = message.getServeraddressbyclientcidrsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GroupVersionForDiscovery versions = 2;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.getVersionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery, 2));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.setVersionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.addVersions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * optional GroupVersionForDiscovery preferredVersion = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.getPreferredversion = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.setPreferredversion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.clearPreferredversion = function() {
  return this.setPreferredversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.hasPreferredversion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ServerAddressByClientCIDR serverAddressByClientCIDRs = 4;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.getServeraddressbyclientcidrsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR, 4));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.setServeraddressbyclientcidrsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.addServeraddressbyclientcidrs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.prototype.clearServeraddressbyclientcidrsList = function() {
  return this.setServeraddressbyclientcidrsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup.serializeBinaryToWriter
    );
  }
};


/**
 * repeated APIGroup groups = 1;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup, 1));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIGroupList.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.repeatedFields_ = [5,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    singularname: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    namespaced: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    group: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    kind: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    verbs: (f = msg.getVerbs()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.toObject(includeInstance, f),
    shortnamesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    categoriesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    storageversionhash: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSingularname(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNamespaced(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 4:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.deserializeBinaryFromReader);
      msg.setVerbs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addShortnames(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategories(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorageversionhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVerbs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.serializeBinaryToWriter
    );
  }
  f = message.getShortnamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string singularName = 6;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getSingularname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setSingularname = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearSingularname = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.hasSingularname = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool namespaced = 2;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getNamespaced = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setNamespaced = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearNamespaced = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.hasNamespaced = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string group = 8;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string version = 9;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string kind = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearKind = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.hasKind = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Verbs verbs = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getVerbs = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setVerbs = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearVerbs = function() {
  return this.setVerbs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.hasVerbs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string shortNames = 5;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getShortnamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setShortnamesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.addShortnames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearShortnamesList = function() {
  return this.setShortnamesList([]);
};


/**
 * repeated string categories = 7;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getCategoriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setCategoriesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.addCategories = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};


/**
 * optional string storageVersionHash = 10;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.getStorageversionhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.setStorageversionhash = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.clearStorageversionhash = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.prototype.hasStorageversionhash = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupversion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupversion(value);
      break;
    case 2:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource.serializeBinaryToWriter
    );
  }
};


/**
 * optional string groupVersion = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.getGroupversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.setGroupversion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.clearGroupversion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.hasGroupversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated APIResource resources = 2;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource, 2));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIResourceList.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    serveraddressbyclientcidrsList: jspb.Message.toObjectList(msg.getServeraddressbyclientcidrsList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addVersions(value);
      break;
    case 2:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.deserializeBinaryFromReader);
      msg.addServeraddressbyclientcidrs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getServeraddressbyclientcidrsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string versions = 1;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.getVersionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.setVersionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.addVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * repeated ServerAddressByClientCIDR serverAddressByClientCIDRs = 2;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.getServeraddressbyclientcidrsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR, 2));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.setServeraddressbyclientcidrsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.addServeraddressbyclientcidrs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.APIVersions.prototype.clearServeraddressbyclientcidrsList = function() {
  return this.setServeraddressbyclientcidrsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    dryrunList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    force: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    fieldmanager: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDryrun(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldmanager(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDryrunList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated string dryRun = 1;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.getDryrunList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.setDryrunList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.addDryrun = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.clearDryrunList = function() {
  return this.setDryrunList([]);
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.setForce = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.clearForce = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.hasForce = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string fieldManager = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.getFieldmanager = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.setFieldmanager = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.clearFieldmanager = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ApplyOptions.prototype.hasFieldmanager = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    observedgeneration: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 4:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 observedGeneration = 3;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    dryrunList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    fieldmanager: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    fieldvalidation: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDryrun(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldmanager(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldvalidation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDryrunList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated string dryRun = 1;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.getDryrunList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.setDryrunList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.addDryrun = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.clearDryrunList = function() {
  return this.setDryrunList([]);
};


/**
 * optional string fieldManager = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.getFieldmanager = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.setFieldmanager = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.clearFieldmanager = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.hasFieldmanager = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string fieldValidation = 4;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.getFieldvalidation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.setFieldvalidation = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.clearFieldvalidation = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.CreateOptions.prototype.hasFieldvalidation = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    graceperiodseconds: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    preconditions: (f = msg.getPreconditions()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.toObject(includeInstance, f),
    orphandependents: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    propagationpolicy: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    dryrunList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGraceperiodseconds(value);
      break;
    case 2:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.deserializeBinaryFromReader);
      msg.setPreconditions(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrphandependents(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropagationpolicy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addDryrun(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPreconditions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDryrunList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional int64 gracePeriodSeconds = 1;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.getGraceperiodseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.setGraceperiodseconds = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.clearGraceperiodseconds = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.hasGraceperiodseconds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Preconditions preconditions = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.getPreconditions = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.setPreconditions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.clearPreconditions = function() {
  return this.setPreconditions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.hasPreconditions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool orphanDependents = 3;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.getOrphandependents = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.setOrphandependents = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.clearOrphandependents = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.hasOrphandependents = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string propagationPolicy = 4;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.getPropagationpolicy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.setPropagationpolicy = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.clearPropagationpolicy = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.hasPropagationpolicy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string dryRun = 5;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.getDryrunList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.setDryrunList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.addDryrun = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.DeleteOptions.prototype.clearDryrunList = function() {
  return this.setDryrunList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 duration = 1;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.prototype.setDuration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.prototype.clearDuration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Duration.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: msg.getRaw_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRaw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes Raw = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Raw = 1;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.prototype.getRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRaw()));
};


/**
 * optional bytes Raw = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRaw()`
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.prototype.setRaw = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.prototype.clearRaw = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceversion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resourceVersion = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.prototype.getResourceversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.prototype.setResourceversion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.prototype.clearResourceversion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GetOptions.prototype.hasResourceversion = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    kind: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string kind = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.clearKind = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupKind.prototype.hasKind = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    resource: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string resource = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.getResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.setResource = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.clearResource = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupResource.prototype.hasResource = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersion.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupversion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string groupVersion = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.getGroupversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.setGroupversion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.clearGroupversion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.hasGroupversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    kind: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string kind = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.clearKind = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionKind.prototype.hasKind = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    resource: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string resource = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.getResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.setResource = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.clearResource = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.GroupVersionResource.prototype.hasResource = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchlabelsMap: (f = msg.getMatchlabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    matchexpressionsList: jspb.Message.toObjectList(msg.getMatchexpressionsList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMatchlabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.deserializeBinaryFromReader);
      msg.addMatchexpressions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchlabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMatchexpressionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> matchLabels = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.prototype.getMatchlabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.prototype.clearMatchlabelsMap = function() {
  this.getMatchlabelsMap().clear();
  return this;
};


/**
 * repeated LabelSelectorRequirement matchExpressions = 2;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.prototype.getMatchexpressionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement, 2));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.prototype.setMatchexpressionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.prototype.addMatchexpressions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector.prototype.clearMatchexpressionsList = function() {
  return this.setMatchexpressionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    operator: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    valuesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.setKey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string operator = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.setOperator = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.clearOperator = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.hasOperator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string values = 3;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.List;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension;
      reader.readMessage(value,k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.serializeBinaryToWriter
    );
  }
};


/**
 * optional ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.runtime.RawExtension items = 2;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.runtime.RawExtension>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.runtime.RawExtension>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension, 2));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.runtime.RawExtension>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.runtime.RawExtension}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.k8s.io.apimachinery.pkg.runtime.RawExtension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.List} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.List.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    selflink: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    resourceversion: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    pb_continue: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    remainingitemcount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelflink(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceversion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRemainingitemcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string selfLink = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.getSelflink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.setSelflink = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.clearSelflink = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.hasSelflink = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string resourceVersion = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.getResourceversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.setResourceversion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.clearResourceversion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.hasResourceversion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string continue = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.getContinue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.setContinue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.clearContinue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.hasContinue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 remainingItemCount = 4;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.getRemainingitemcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.setRemainingitemcount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.clearRemainingitemcount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.prototype.hasRemainingitemcount = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelselector: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    fieldselector: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    watch: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    allowwatchbookmarks: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    resourceversion: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    resourceversionmatch: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    timeoutseconds: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    limit: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    pb_continue: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    sendinitialevents: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelselector(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldselector(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatch(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowwatchbookmarks(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceversion(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceversionmatch(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeoutseconds(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinue(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendinitialevents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string labelSelector = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getLabelselector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setLabelselector = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearLabelselector = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasLabelselector = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string fieldSelector = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getFieldselector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setFieldselector = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearFieldselector = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasFieldselector = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool watch = 3;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getWatch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setWatch = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearWatch = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasWatch = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool allowWatchBookmarks = 9;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getAllowwatchbookmarks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setAllowwatchbookmarks = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearAllowwatchbookmarks = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasAllowwatchbookmarks = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string resourceVersion = 4;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getResourceversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setResourceversion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearResourceversion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasResourceversion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string resourceVersionMatch = 10;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getResourceversionmatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setResourceversionmatch = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearResourceversionmatch = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasResourceversionmatch = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 timeoutSeconds = 5;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getTimeoutseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setTimeoutseconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearTimeoutseconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasTimeoutseconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 limit = 7;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string continue = 8;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getContinue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setContinue = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearContinue = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasContinue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool sendInitialEvents = 11;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.getSendinitialevents = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.setSendinitialevents = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.clearSendinitialevents = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListOptions.prototype.hasSendinitialevents = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    manager: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    operation: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    apiversion: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    time: (f = msg.getTime()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.toObject(includeInstance, f),
    fieldstype: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    fieldsv1: (f = msg.getFieldsv1()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.toObject(includeInstance, f),
    subresource: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setManager(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiversion(value);
      break;
    case 4:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldstype(value);
      break;
    case 7:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.deserializeBinaryFromReader);
      msg.setFieldsv1(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubresource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFieldsv1();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string manager = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.getManager = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.setManager = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.clearManager = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.hasManager = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string operation = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.setOperation = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.clearOperation = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string apiVersion = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.getApiversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.setApiversion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.clearApiversion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.hasApiversion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Time time = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.getTime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.hasTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string fieldsType = 6;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.getFieldstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.setFieldstype = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.clearFieldstype = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.hasFieldstype = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FieldsV1 fieldsV1 = 7;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.getFieldsv1 = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1, 7));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.FieldsV1|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.setFieldsv1 = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.clearFieldsv1 = function() {
  return this.setFieldsv1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.hasFieldsv1 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string subresource = 8;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.getSubresource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.setSubresource = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.clearSubresource = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.prototype.hasSubresource = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nanos: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.setNanos = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.clearNanos = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.MicroTime.prototype.hasNanos = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.repeatedFields_ = [13,14,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    generatename: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    namespace: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    selflink: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    uid: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    resourceversion: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    generation: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    creationtimestamp: (f = msg.getCreationtimestamp()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.toObject(includeInstance, f),
    deletiontimestamp: (f = msg.getDeletiontimestamp()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.toObject(includeInstance, f),
    deletiongraceperiodseconds: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    annotationsMap: (f = msg.getAnnotationsMap()) ? f.toObject(includeInstance, undefined) : [],
    ownerreferencesList: jspb.Message.toObjectList(msg.getOwnerreferencesList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.toObject, includeInstance),
    finalizersList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    managedfieldsList: jspb.Message.toObjectList(msg.getManagedfieldsList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeneratename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelflink(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceversion(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGeneration(value);
      break;
    case 8:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.deserializeBinaryFromReader);
      msg.setCreationtimestamp(value);
      break;
    case 9:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.deserializeBinaryFromReader);
      msg.setDeletiontimestamp(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeletiongraceperiodseconds(value);
      break;
    case 11:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 12:
      var value = msg.getAnnotationsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 13:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.deserializeBinaryFromReader);
      msg.addOwnerreferences(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addFinalizers(value);
      break;
    case 17:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.deserializeBinaryFromReader);
      msg.addManagedfields(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCreationtimestamp();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.serializeBinaryToWriter
    );
  }
  f = message.getDeletiontimestamp();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getAnnotationsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getOwnerreferencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.serializeBinaryToWriter
    );
  }
  f = message.getFinalizersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getManagedfieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string generateName = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getGeneratename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setGeneratename = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearGeneratename = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasGeneratename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string namespace = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setNamespace = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearNamespace = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasNamespace = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string selfLink = 4;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getSelflink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setSelflink = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearSelflink = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasSelflink = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string uid = 5;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setUid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearUid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasUid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string resourceVersion = 6;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getResourceversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setResourceversion = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearResourceversion = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasResourceversion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 generation = 7;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setGeneration = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearGeneration = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasGeneration = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Time creationTimestamp = 8;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getCreationtimestamp = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time, 8));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setCreationtimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearCreationtimestamp = function() {
  return this.setCreationtimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasCreationtimestamp = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Time deletionTimestamp = 9;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getDeletiontimestamp = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time, 9));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setDeletiontimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearDeletiontimestamp = function() {
  return this.setDeletiontimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasDeletiontimestamp = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 deletionGracePeriodSeconds = 10;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getDeletiongraceperiodseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setDeletiongraceperiodseconds = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearDeletiongraceperiodseconds = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.hasDeletiongraceperiodseconds = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * map<string, string> labels = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;
};


/**
 * map<string, string> annotations = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getAnnotationsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearAnnotationsMap = function() {
  this.getAnnotationsMap().clear();
  return this;
};


/**
 * repeated OwnerReference ownerReferences = 13;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getOwnerreferencesList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference, 13));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setOwnerreferencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.addOwnerreferences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearOwnerreferencesList = function() {
  return this.setOwnerreferencesList([]);
};


/**
 * repeated string finalizers = 14;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getFinalizersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setFinalizersList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.addFinalizers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearFinalizersList = function() {
  return this.setFinalizersList([]);
};


/**
 * repeated ManagedFieldsEntry managedFields = 17;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.getManagedfieldsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry, 17));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.setManagedfieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.addManagedfields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.prototype.clearManagedfieldsList = function() {
  return this.setManagedfieldsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiversion: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    kind: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    uid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    controller: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    blockownerdeletion: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiversion(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setController(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockownerdeletion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string apiVersion = 5;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.getApiversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.setApiversion = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.clearApiversion = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.hasApiversion = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.clearKind = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.hasKind = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.setName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.clearName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string uid = 4;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.setUid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.clearUid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.hasUid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool controller = 6;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.getController = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.setController = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.clearController = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.hasController = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool blockOwnerDeletion = 7;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.getBlockownerdeletion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.setBlockownerdeletion = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.clearBlockownerdeletion = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.OwnerReference.prototype.hasBlockownerdeletion = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PartialObjectMetadata items = 2;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata, 2));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadataList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Patch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    dryrunList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    force: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    fieldmanager: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    fieldvalidation: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDryrun(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldmanager(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldvalidation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDryrunList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated string dryRun = 1;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.getDryrunList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.setDryrunList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.addDryrun = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.clearDryrunList = function() {
  return this.setDryrunList([]);
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.setForce = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.clearForce = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.hasForce = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string fieldManager = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.getFieldmanager = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.setFieldmanager = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.clearFieldmanager = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.hasFieldmanager = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string fieldValidation = 4;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.getFieldvalidation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.setFieldvalidation = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.clearFieldvalidation = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.PatchOptions.prototype.hasFieldvalidation = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    resourceversion: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string uid = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.setUid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.clearUid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string resourceVersion = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.getResourceversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.setResourceversion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.clearResourceversion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Preconditions.prototype.hasResourceversion = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string paths = 1;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.prototype.getPathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.prototype.setPathsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.prototype.addPaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.RootPaths.prototype.clearPathsList = function() {
  return this.setPathsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientcidr: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    serveraddress: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientcidr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServeraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string clientCIDR = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.getClientcidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.setClientcidr = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.clearClientcidr = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.hasClientcidr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string serverAddress = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.getServeraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.setServeraddress = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.clearServeraddress = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR.prototype.hasServeraddress = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.toObject(includeInstance, f),
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    details: (f = msg.getDetails()) && proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.toObject(includeInstance, f),
    code: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StatusDetails details = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.getDetails = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} */ (
    jspb.Message.getWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails, 5));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 code = 6;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.clearCode = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Status.prototype.hasCode = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    field: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.clearReason = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.hasReason = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string field = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.setField = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.clearField = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.prototype.hasField = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    group: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    kind: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    uid: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    causesList: jspb.Message.toObjectList(msg.getCausesList(),
    proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.toObject, includeInstance),
    retryafterseconds: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 4:
      var value = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause;
      reader.readMessage(value,proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.deserializeBinaryFromReader);
      msg.addCauses(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetryafterseconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCausesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string group = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.setGroup = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.clearGroup = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string kind = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.clearKind = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.hasKind = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string uid = 6;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.setUid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.clearUid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.hasUid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated StatusCause causes = 4;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.getCausesList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause, 4));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.setCausesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.addCauses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusCause, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.clearCausesList = function() {
  return this.setCausesList([]);
};


/**
 * optional int32 retryAfterSeconds = 5;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.getRetryafterseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.setRetryafterseconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.clearRetryafterseconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.StatusDetails.prototype.hasRetryafterseconds = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeobject: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIncludeobject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string includeObject = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.prototype.getIncludeobject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.prototype.setIncludeobject = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.prototype.clearIncludeobject = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TableOptions.prototype.hasIncludeobject = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nanos: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.setNanos = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.clearNanos = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time.prototype.hasNanos = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nanos: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.setNanos = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.clearNanos = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp.prototype.hasNanos = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    apiversion: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.setKind = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.clearKind = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.hasKind = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string apiVersion = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.getApiversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.setApiversion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.clearApiversion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.TypeMeta.prototype.hasApiversion = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    dryrunList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    fieldmanager: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fieldvalidation: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDryrun(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldmanager(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldvalidation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDryrunList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated string dryRun = 1;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.getDryrunList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.setDryrunList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.addDryrun = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.clearDryrunList = function() {
  return this.setDryrunList([]);
};


/**
 * optional string fieldManager = 2;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.getFieldmanager = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.setFieldmanager = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.clearFieldmanager = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.hasFieldmanager = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string fieldValidation = 3;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.getFieldvalidation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.setFieldvalidation = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.clearFieldvalidation = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.UpdateOptions.prototype.hasFieldvalidation = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string items = 1;
 * @return {!Array<string>}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.prototype.getItemsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.prototype.setItemsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.prototype.addItems = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.Verbs.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    object: (f = msg.getObject()) && k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent;
  return proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension;
      reader.readMessage(value,k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.runtime.RawExtension object = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.runtime.RawExtension}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.getObject = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.runtime.RawExtension} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_runtime_generated_pb.RawExtension, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.runtime.RawExtension|undefined} value
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent} returns this
*/
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent} returns this
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.k8s.io.apimachinery.pkg.apis.meta.v1.WatchEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.k8s.io.apimachinery.pkg.apis.meta.v1);
