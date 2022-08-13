// Create a main house
const house = new Entity()
house.addComponent(new GLTFShape('models/KameHouse_0813.glb'))
house.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0)
  })
)
engine.addEntity(house)
