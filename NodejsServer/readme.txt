NodejsServer has two Floders both are the same functionality and same logic.But Different Ways to build Nodejs application using typeScript or Js.
1)typeScript-Nodejs
2)Nodejs-only

1)typeScript-Nodejs
First creat Floder for your Nodejs project
Name the floder '.....' what ever name you like to.
-- mkdir typeScript-Nodejs
--cd typeScript-Nodejs
--npm install -g typescript --save--dev

2)Then create a file tsconfig.json
what is the use of tsconfig.json??
TypeScript is a primary language for Angular application development. It is a superset of JavaScript with design-time support for type safety and tooling.
Browsers can't execute TypeScript directly. Typescript must be "transpiled" into JavaScript using the tsc compiler, which requires some configuration.
                              (or)
The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies
 the root files and the compiler options required to compile the project. A project is compiled in one of the following ways:

Using tsconfig.json
By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.
When input files are specified on the command line, tsconfig.json files are ignored.



Firstly we want to create a tsconfig.json file. This can be done with tsc.

tsc --init
Running the above command creates the tsconfig.json in the current directory. 
It also adds some useful boilerplate code to the file. Looking inside the newly-generated tsconfig.json you should see the following:

{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false
    },
    "exclude": [
        "node_modules"
    ]
}

Now we can install the application depencies via NPM. In the application root folder run the following:

npm init -y
npm install --save express
This creates a package.json file and installs Express as a dependency.

Finally let's create the application files. Make a folder called src and add a app.ts file. The application will be a greeter.
 