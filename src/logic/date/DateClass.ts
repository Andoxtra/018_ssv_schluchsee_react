export class DateClass {
    private m_date: Date;
    public constructor(date: string){
        this.m_date = new Date(date);
    }
    public getGermanDate(): string {
        const day = this.m_date.getDate().toString().padStart(2, "0");
        const month = (this.m_date.getMonth() + 1).toString().padStart(2, "0");
        const year = this.m_date.getFullYear();
        return `${day}.${month}.${year}`;
    }
}