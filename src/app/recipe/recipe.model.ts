export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    //TODO: Add ingredients list

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}