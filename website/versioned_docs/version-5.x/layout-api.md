---
id: layout-api
title: Layout Engine API
sidebar_label: API
---

The single-spa-layout library exposes several javascript functions as a public API.

## constructRoutes

The `constructRoutes` API transforms your [Layout Definition](/docs/layout-definition/) into an opaque "resolved routes" object. We call it "opaque" because the shape of the object is irrelevant, as you will only use it when calling other APIs within single-spa-layout.

```js
import { constructRoutes } from 'single-spa-layout';

const htmlTemplate = document.querySelector('#single-spa-template')
const layoutData = {
  props: {
    authToken: "78sf9d0fds89-0fysdiuf6sf8",
    loggedInUser: fetch('/api/user')
  },
  loaders: {
    mainContent: `<img src="loading.gif">`,
    // A single-spa parcel config
    topNav: singleSpaReact({...})
  }
};

const resolvedRoutes = constructRoutes(htmlTemplate, layoutData)
```

**Arguments**

- `routesConfig` (required): Routes config is a [JSON Layout Definition](/docs/layout-definition/#json-layouts), an [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), or a [parse5 HTML element](https://github.com/inikulin/parse5). If it is an HTMLElement, it must be a `<single-spa-router>` element or a `<template>` that contains a single-spa-router element.
- `layoutData` (optional): Layout data is an optionally provided object that defines [props](/docs/layout-definition/#props) and [loaders](/docs/layout-definition/#props) for [HTML Layouts](/docs/layout-definition/#html-layouts). You can omit it if using a [JSON Layout](/docs/layout-definition/#json-layout) or if you do not need to define props or loaders in your HTML Layout. The layoutData object should have top level properties `props` and `loaders` that are each objects. Each of those objects' keys is the name of a prop or loader and its corresponding value.

**Return value**

An opaque `resolvedRoutes` object. It is opaque because you will only use the object when calling other single-spa-layout APIs and do not need to read or modify the resolvedRoutes.

## constructApplications

The `constructApplications` API transforms your `resolvedRoutes` into [single-spa application registration objects](/docs/configuration#registering-applications). These application registration objects are then used to call [singleSpa.registerApplication()](/docs/api/#registerapplication).

```js
import { constructRoutes, constructApplications } from 'single-spa-layout';
import { registerApplication } from 'single-spa';

const resolvedRoutes = constructRoutes(...)
const applications = constructApplications({
  routes: resolvedRoutes,
  loadApp: (app) => System.import(app.name)
})
applications.forEach(registerApplication);
```

**Arguments**

`constructApplications` accepts a single object as an argument, with the following properties:

- `routes` (required): The opaque `resolvedRoutes` object returned from `constructRoutes`.
- `loadApp` (required): A function that is given an application object and must return a [loading function](/docs/configuration/#loading-function-or-application).

**Return value**

`constructApplications` returns an array of [single-spa registration objects](/docs/configuration/#registering-applications).

## constructLayoutEngine

The `constructLayoutEngine` API transforms your `resolvedRoutes` and `applications` into a `layoutEngine` object. The layout engine is responsible for creating, destroying, and rearranging dom elements during route transitions.

```js
import { constructRoutes, constructApplications, constructLayoutEngine } from 'single-spa-layout';
import { registerApplication, start } from 'single-spa';

const resolvedRoutes = constructRoutes(...);
const applications = constructApplications(...);
const layoutEngine = constructLayoutEngine({routes: resolvedRoutes, applications: applications});

layoutEngine.isActive(); // true
layoutEngine.deactivate();
layoutEngine.activate();

applications.forEach(registerApplication);
start();
```

**Arguments**

`constructLayoutEngine` accepts a single object as an argument, with the following properties:

- `routes` (required): The opaque `resolvedRoutes` object returned from `constructRoutes`.
- `applications` (required): The array of [application registration objects](/docs/configuration/#registering-applications) returned from `constructApplications`.
- `active` (optional): A boolean that indicates whether the layout engine should start out active or not. Defaults to true.

**Return Value**

A `layoutEngine` object, with the following properties:

- `isActive`: a function that accepts no arguments and returns a boolean indicating whether the layout engine is active or not. When active, the layout engine will change the DOM during route transitions.

- `activate`: a function that accepts no arguments and returns `undefined`. Calling this function activates the layout engine, which includes setting up routing event listeners so that the layout engine can change the DOM during route transitions.
- `deactivate`: a function that accepts no arguments and returns `undefined`. Calling this function deactivates the layout engine, which includes tearing down all routing event listeners so that the layout engine no longer changes the DOM during route transitions.

## matchRoute

The `matchRoute` API primarily exists for server rendering. It returns a filtered `resolvedRoutes` object that contains only the routes that match a particular string path.

```js
import { constructRoutes, matchRoute } from 'single-spa-layout';

const resolvedRoutes = constructRoutes(...);

const settingsRoutes = matchRoute(resolvedRoutes, "/settings")
const dashboardRoutes = matchRoute(resolvedRoutes, "/dashboard")
```

**Arguments**

- `routes` (required): The opaque `resolvedRoutes` object returned from `constructRoutes`.
- `path` (required): A string path representing the URL fragment to match the routes with. Note that the path is not a full URL - it only is the pathname part of a browser's URL. In server rendering contexts, this is often available as `req.url`.

**Return Value**

An opaque `resolvedRoutes` object. It is opaque because you will only use the object when calling other single-spa-layout APIs and do not need to read or modify the resolvedRoutes.
