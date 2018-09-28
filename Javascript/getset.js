class Person{
    constructor()
    {
        this._id_=23;
        this._name_="das";
        this._age_=56;
    }
   /* get name()
    {
        return this._name_;
    }
    set name(name)
    {
        this._name_=name;
    }
    get id()
    {
        return this._id_;
    }
    set id(id)
    {
        this._id_=id;
    }
    get age()
    {
        return this._age_;
    }
    set age(age)
    {
        this._age_=age;
    }*/
}

let me=new Person();
me.name="Advitya";
me.age=21;
me.id=12356;
display=function()
{
    console.log("ID:"+me.id+" Name:"+me.name+" Age:"+me.age);
}
display();
