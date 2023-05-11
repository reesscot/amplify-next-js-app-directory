// configure.js
"use client";

import { Amplify } from "aws-amplify";

import config from "@/aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);