module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "sourceMaps": "inline"
  // transform: {
	// 	"^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
	// 	"^.+\\.tsx?$": "ts-jest"
	// }
};
{
  plugins: [
+    [
+       'module-resolver',
+       {
+         root: ['./src'],
+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
+         alias: {
+           tests: ['./tests/'],
+           "@components": "./src/components",
+         }
+       }
+    ]
  ]
}