import {
    BoxGeometry,
    ConeGeometry,
    Group,
    Mesh,
    MeshStandardMaterial,
} from 'three'
import Entity from './Entity'

// Main house geometry (box for the house)
const HOUSE_GEOMETRY = new BoxGeometry(1, 1, 1)
// Roof geometry (cone for the roof)
const ROOF_GEOMETRY = new ConeGeometry(0.7, 1, 4)

// Material for the house
const HOUSE_MATERIAL = new MeshStandardMaterial({
    flatShading: true,
    color: 0x8b4513, // Brown color for house
})

// Material for the roof
const ROOF_MATERIAL = new MeshStandardMaterial({
    flatShading: true,
    color: 0x3e1f1b, // Darker brown for the roof
})

export default class House extends Entity {
    constructor(resolution, color) {
        // Create the house base (box)
        const houseMesh = new Mesh(HOUSE_GEOMETRY, HOUSE_MATERIAL)
        houseMesh.scale.set(2, 2, 2)  // House size

        // Create the roof (cone)
        const roofMesh = new Mesh(ROOF_GEOMETRY, ROOF_MATERIAL)
        roofMesh.position.y = 2  // Position the roof above the house base
        roofMesh.scale.set(2, 2, 2)  // Match roof size to house
        roofMesh.rotation.y = Math.random() * Math.PI * 2 // Random roof rotation

        // Optional: Apply a random color if specified
        if (color) {
            HOUSE_MATERIAL.color.set(color)
        }

        // Combine the house and the roof into one mesh
        const houseGroup = new Group()
        houseGroup.add(houseMesh)
        houseGroup.add(roofMesh)

        // Call the superclass constructor with the house group mesh
        super(houseGroup, resolution)
    }
}
