namespace Subjects {
    // Using declaration merging to extend Teacher interface
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
  
      getAvailableTeacher(): string {
        if (this._teacher && this._teacher.experienceTeachingC !== undefined) {
          return `Available Teacher: ${this._teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }