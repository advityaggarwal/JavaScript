class mobile
{
    constructor()
    {
        this.id=0;
        this.name="null";
        this.price=0;
    }
    display()
    {
        return (this.id+this.name+this.price);
    }
}
class apple extends mobile
{
    constructor()
    {
        super();
        this.type="sdfh";
    }
    display2()
    {
        return (super.display()+this.type);
    }
}
var bg=new apple;
console.log(bg.display());
console.log(bg.display2());