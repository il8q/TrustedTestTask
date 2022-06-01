export default class EventListElement
{
   private readonly data: Date;
   private readonly description: string;
   public readonly isOverdue: boolean;

   constructor(
      data: Date = new Date(),
      description: string,
      isOverdue: boolean,
   ) {
      this.data = data;
      this.description = description;
      this.isOverdue = isOverdue;
   }

   public getData(): Date {
      return this.data;
   }

   public getDescription(): string {
      return this.description;
   }
}