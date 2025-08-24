import {
    engine,
    resourceSystem,
    sceneManager,
    Scene,
    defineScene,
    Node,
    Component,
    defineComponent,
    Sprite,
    Text,
    Layer,
} from "cassia-engine";

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
    public mainLayer: Layer = null!;

    protected onInit(): void {
        this.mainLayer = new Layer("Main");
        this.addLayer(this.mainLayer);

        const squareNode = new Node({ layer: this.mainLayer });
        squareNode.addComponent(Sprite)!.texture = resourceSystem.getTexture("square");
        squareNode.setPosition(-200, 0);

        const circleNode = new Node({ layer: this.mainLayer });
        circleNode.addComponent(Sprite)!.texture = resourceSystem.getTexture("circle");
        circleNode.x = 200;

        const textNode = new Node({ layer: this.mainLayer });
        textNode.addComponent(Text)!.text = "Hello, Cassia Engine!";
        textNode.addComponent(MyComponent);
    }
}

@defineComponent({ componentName: "MyComponent" })
export class MyComponent extends Component {
    protected onStart(): void {
        console.log("MyComponent started");
    }
}

sceneManager.loadScene(GameScene);
