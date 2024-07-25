
# Module: Build a TextInput Component

This is the sample project code for implementing a text input component.

## Running the Project Locally
1. Run `npm install` to install the project dependencies.
2. Run `npm run start` to boot up the dev server.

Open up http://localhost:3000/ in your browser to view the project site. Any changes you make will auto-update in the browser.

### Files
The following files will be used throughout the implementation process of the text input:

#### 1. App.jsx
This file serves as the entry point for the project and will be the location where we render the `TextInput` component and [pass in the props](https://react.dev/learn/passing-props-to-a-component) that the component accepts.

#### 2. TextInput.jsx
This file provides the boilerplate for the `TextInput` component. The props with the ⭐ emoji next to them indicate the props that need to be wired up to make the code accessible. All the other props have been wired up appropriately.

#### 3. TextInput.css
There are styles being applied to the `input` and `label` to make it more visually appealing than the default styles that come included with these elements.

In a real-world application, you wouldn't typically target elements directly in a stylesheet. Instead, you'd employ more powerful and organized CSS solutions like CSS Modules, styled-components, Tailwind CSS, or other suitable options to ensure a more maintainable and scalable codebase. However, to keep things simple and straightforward, you'll use plain old CSS and make the most of CSS selectors.

### Dependencies
In this project, you have a basic React starter setup and the [prop-types package](https://www.npmjs.com/package/prop-types) for runtime type checking. Additionally, you will use one of the SVG's from [Radix Icons](https://icons.radix-ui.com/) in an upcoming lesson about handling error messages.


## CodeSandbox
Alternatively, the starter code for the project can also be found in this [CodeSandbox environment](https://codesandbox.io/s/starter-textinput-component-ssqd84?file=/src/components/TextInput.jsx). Feel free to fork the sandbox to follow along with the corresponding lessons.