# manga app

This a application meant to demonstrate useful Vue functionalities, that any new Vue developer would need to know. Originally prepared for BlueGrid Knowledge Transfer, by the name of "From Vue to You".

The app covers:

-   Making components and using lifecycle hooks
-   Vue directives like `v-for`, `v-if`, etc
-   Vue filters
-   Event handling
-   Communication between parent and child component
-   Getting data from an API and rendering it properly
-   Computed properties - filtering data
-   Binding data with `v-model`
-   Making a global store, similar to what Vuex does

---

## Setup

### If you want to make this from scratch, read this:

1. Make sure you have a newer version of Node,
   I will use `14.15.4`

2. Download Vue CLI via Node package manager

    - `npm install -g @vue/cli`

3. Creating Vue app

    - `vue create <name>`
    - choose Vue2 option

4. Install Axios library

    - `yarn add axios`

5. Create `/src/assets/style.css`

6. Go to `/src/main.js` and import your own styles

    ```
    import "./assets/style.css";
    ```

7. Include Bootstrap 5 & FontAwesome in the head & script tag of `/public/index.html`

8. Create `jsconfig.json` in the root of project and put:

    ```
    {
        "include": ["./src/**/*"]
    }
    ```

    We do this to let Vetur, official Vue formatter and linter, take care of all files inside of a `src` directory. Vetur by default uses ESLINT and Prettier in the background.

9. Optionally, add `.prettierrc` file at the root of the project and put:

    ```
    {
        "tabWidth": 4,
        "singleQuote": false,
        "trailingComma": "es5",
        "semi": true
    }
    ```

    You don't have to do this, as Vetur by default is using some default Prettier rules. If you want to change those defaults, you can put your own ones into this file, like I did. These rules I like to use on all my projects.

---

## How to run the app

1. Generate `node_modules` by running:

    - `yarn install`

2. Run this to compile and hot-reload for development
    - `yarn serve`

> Keep in mind that when I was presenting this, I had Laravel API running on port `8000`. Even so, I included here `/public/mock_api` dir with all the data you need. Also, I edited Ajax call logic so that this all works for you without an actuall API. Just run `yarn serve` and you are good to go!

Reach out to me if you have any questions :)

---

## Additionally

Compiles and minifies for production

-   `yarn build`

Lints and fixes files

-   `yarn lint`

Customize configuration

-   See [Configuration Reference](https://cli.vuejs.org/config/).
