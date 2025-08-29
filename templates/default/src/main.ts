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

@defineScene({ sceneName: "GameScene" })
export class GameScene extends Scene {
    public mainLayer: Layer = null!;

    protected onInit(): void {
        this.mainLayer = new Layer("Main");
        this.addLayer(this.mainLayer);

        const squareNode = new Node({ layer: this.mainLayer });
        squareNode.addComponent(Sprite)!.texture = resourceSystem.getTexture("square");
        squareNode.setPosition(-200, 0);

        const circleNode = new Node({ layer: this.mainLayer, x: 200 });
        circleNode.addComponent(Sprite, { texture: resourceSystem.getTexture("circle") });

        const textNode = new Node({ layer: this.mainLayer });
        textNode.addComponent(Text, { text: "Hello, Cassia Engine!" });
        textNode.addComponent(MyComponent, { data: "Hello, Cassia Engine!" });
    }
}

@defineComponent({ componentName: "MyComponent" })
export class MyComponent extends Component {
    public data: string = "";

    protected onStart(): void {
        console.log("MyComponent started");
    }
}

async function main() {
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

    sceneManager.loadScene(GameScene);
}

main();
