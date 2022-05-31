export default class EventListElement
{
   private readonly data: Date;
   private description: string;
   constructor(data: Date = new Date(), description: string) {
      this.data = data;
      this.description = description;// TODO: нужна фабрика, так требуется проверка максимальной длинны
   }

   public getData(): Date {
      return this.data;
   }

   public getDescription(): string {
      return this.description;
   }

   public setDescription(newValue: string) {
      this.description = newValue;
   }
}