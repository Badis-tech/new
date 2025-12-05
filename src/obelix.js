import { Group, TextureLoader, MeshStandardMaterial } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import Entity from './Entity'

export default class Obelix extends Entity {
    constructor(resolution, color, onLoad) {
        // Create a group to hold the loaded model
        const group = new Group()

        super(group, resolution)

        // Load textures
        const textureLoader = new TextureLoader()
        const baseColorTexture = textureLoader.load('/obelix-model/textures/Obelix_Base_color.jpeg')
        const metallicTexture = textureLoader.load('/obelix-model/textures/Obelix_Metallic.jpeg')
        const normalTexture = textureLoader.load('/obelix-model/textures/Obelix_Normal_OpenGL.jpeg')
        const roughnessTexture = textureLoader.load('/obelix-model/textures/Obelix_Roughness.jpeg')

        // Load the FBX model
        const loader = new FBXLoader()
        loader.load(
            '/obelix-model/source/OBELIX.fbx',
            (fbx) => {
                // Scale the model to appropriate size
                fbx.scale.setScalar(0.01) // Adjust this value based on model size

                // Center the model
                fbx.position.set(0, 0, 0)

                // Apply textures and enable shadows
                fbx.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true
                        child.receiveShadow = true

                        // Create a new material with textures
                        child.material = new MeshStandardMaterial({
                            map: baseColorTexture,
                            metalnessMap: metallicTexture,
                            normalMap: normalTexture,
                            roughnessMap: roughnessTexture,
                            metalness: 0.5,
                            roughness: 1.0,
                        })

                        // Apply color override if specified
                        if (color) {
                            child.material.color.set(color)
                        }
                    }
                })

                // Add the loaded model to the group
                group.add(fbx)

                // Call the onLoad callback if provided
                if (onLoad) {
                    onLoad(fbx)
                }
            },
            (xhr) => {
                // Progress callback
                console.log('Obelix model: ' + (xhr.loaded / xhr.total * 100) + '% loaded')
            },
            (error) => {
                console.error('Error loading Obelix model:', error)
            }
        )
    }
}
