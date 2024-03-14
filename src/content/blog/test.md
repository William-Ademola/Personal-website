---
title: "Test content"
description: "just test."
date: "May 14, 2024"
---

import Link from "../../components/Link.vue";
import Code from "../../components/Code.vue";
import { createHeading } from "../../components/Heading";

export const components = {
  a: Link,
  code: Code,
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
};

