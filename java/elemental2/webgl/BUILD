# This package contains the build rule to build elemental2-webgl.

package(default_visibility = [
    "//third_party/java/elemental2:__subpackages__",
    "//:__subpackages__",
])

# Apache2
licenses(["notice"])

load("@com_google_jsinterop_generator//:jsinterop_generator.bzl", "jsinterop_generator")

filegroup(
    name = "externs",
    srcs = ["//third_party:webgl.js"],
)

# SVG api
jsinterop_generator(
    name = "webgl",
    srcs = [":externs"],
    extension_type_prefix = "WebGl",
    deps = [
        "//java/elemental2/core",
        "//java/elemental2/dom",
    ],
)
