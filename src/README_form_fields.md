# Form Fields Fingerprinting

## Overview
Unlike traditional device identification trackers, the Form Fields fingerprinting module acts as a security telemetry check to detect unauthorized DOM modifications, such as man-in-the-browser malware (e.g., Zeus, Ice IX) injecting fraudulent credential or banking input fields into web forms.

## How It Works
1. **DOM Traversal:** Queries all `<form>` elements on the current page via `document.getElementsByTagName('form')`.
2. **Input Enumeration:** Walks through input elements within each form, filtering out hidden fields to capture visible interaction vectors.
3. **Telemetry Teleport:** Compiles form names and input identifiers into a structured, delimited payload alongside the current page URL for integrity auditing.
