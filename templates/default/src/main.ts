import { engine, resourceSystem, sceneManager, Scene, defineScene, Node, Sprite, Text } from "cassia-engine";

await engine.start();

await resourceSystem.loadTextures([
    {
        name: "circle",
        src: "./circle.png",
    },
    {
        name: "square",
        src: "./square.png",
    },
]);

@defineScene({ sceneName: "GameScene" })
export class GameScene extends Scene {
    onInit(): void {
        console.log("GameScene initialized");

        const squareNode = new Node();
        squareNode.addComponent(Sprite)!.texture = resourceSystem.getTexture("square");
        squareNode.setPosition(-200, 0);

        const circleNode = new Node();
        circleNode.addComponent(Sprite)!.texture = resourceSystem.getTexture("circle");
        circleNode.x = 200;

        const textNode = new Node();
        textNode.addComponent(Text)!.text = "Hello, Cassia Engine!";
    }
}

sceneManager.loadScene(GameScene);
