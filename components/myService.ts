export class myService{
	skills: string[] = ['angular 2', 'react js', 'gulp', 'webpack', 'node js'];
	addSkill(value: any) {
        this.skills.push(value);
    }
}