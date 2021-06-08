import React,{Component, Fragment} from 'react'; 

 
class ContactForm extends Component{

    constructor(){
        super();
        this.state={object:'', rum:'', kvm:'', adress:'', phone:'', postcode:'', contactperson:'', city:'', window:'', email:'',name:'',subject:'',message:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

        this.handleChangeObject = this.handleChangeObject.bind(this);
        this.handleChangeKvm = this.handleChangeKvm.bind(this);
        this.handleChangeWindow = this.handleChangeWindow.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangePostCode = this.handleChangePostCode.bind(this);
        this.handleChangeContact = this.handleChangeContact.bind(this);
        this.handleChangeRum = this.handleChangeRum.bind(this);
        this.handleChangeAdress = this.handleChangeAdress.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangeSubject = this.handleChangeSubject.bind(this);
         this.handleChangeMessage = this.handleChangeMessage.bind(this);
         this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleChangeObject(e){
      this.setState({object:  e.target.value});
      if(e.target.value === '') 
        this.setState({object_err: 'Required Field'});
      else 
        this.setState({object_err: 'Enter Valid Email'});
    }

    handleChangeRum(e){
      this.setState({rum:  e.target.value});
        if(e.target.value === '') 
          this.setState({rum_err: 'Required Field'});
        else 
          this.setState({rum_err: ''});
    }

    handleChangeKvm(e){
      this.setState({kvm:  e.target.value});
        if(e.target.value === '') 
          this.setState({kvm_err: 'Required Field'});
        else 
          this.setState({kvm_err: ''});
    }
    handleChangePhoneNumber(e){
      this.setState({phone:  e.target.value});
        if(e.target.value === '') 
          this.setState({phone_err: 'Required Field'});
        else 
          this.setState({phone_err: ''});
    }

    handleChangeCity(e){
      this.setState({city:  e.target.value});
        if(e.target.value === '') 
          this.setState({city_err: 'Required Field'});
        else 
          this.setState({city_err: ''});
    }
    handleChangeContact(e){
      this.setState({contactperson:  e.target.value});
        if(e.target.value === '') 
          this.setState({contactperson_err: 'Required Field'});
        else 
          this.setState({contactperson_err: ''});
    }
    handleChangePostCode(e){
      this.setState({postcode:  e.target.value});
        if(e.target.value === '') 
          this.setState({postcode_err: 'Required Field'});
        else 
          this.setState({postcode_err: ''});
    }



    handleChangeAdress(e){
      this.setState({adress:  e.target.value});
        if(e.target.value === '') 
          this.setState({adress_err: 'Required Field'});
        else 
          this.setState({adress_err: ''});
    }

    handleChangeWindow(e){
      this.setState({window:  e.target.value});
        if(e.target.value === '') 
          this.setState({window_err: 'Required Field'});
        else 
          this.setState({window_err: ''});
    }

    handleChangeEmail(e){
        this.setState({email:  e.target.value});
        var EmailReg =  /(\w+)\s(\w+)/;
        if(e.target.value === '') 
          this.setState({email_err: 'Required Field'});
        else if(EmailReg.test(e.target.value)) 
          this.setState({email_err: ''});
        else 
          this.setState({email_err: 'Enter Valid Email'});
      }

      handleChangeName(e){
        this.setState({name:  e.target.value});
          if(e.target.value === '') 
            this.setState({name_err: 'Required Field'});
          else 
            this.setState({name_err: ''});
      }
      handleChangeSubject(e){
        this.setState({subject:  e.target.value});
          if(e.target.value === '') 
            this.setState({subject_err: 'Required Field'});
          else 
            this.setState({subject_err: ''});
      }
      handleChangeMessage(e){
        this.setState({message:  e.target.value});
          if(e.target.message === '') 
            this.setState({message_err: 'Required Field'});
          else 
            this.setState({message_err: ''});
      }

      handleSubmit1()
      {
           if(this.state.object === '') 
           this.setState({object_err: 'Required Field'});
           if(this.state.rum === '') 
           this.setState({rum_err: 'Required Field'});
           if(this.state.window === '') 
           this.setState({window_err: 'Required Field'});
           if(this.state.kvm === '') 
           this.setState({kvm_err: 'Required Field'});
           if(this.state.postcode === '') 
           this.setState({postcode_err: 'Required Field'});
           if(this.state.phone === '') 
           this.setState({phone_err: 'Required Field'});
           if(this.state.contactperson === '') 
           this.setState({contactperson_err: 'Required Field'});
           if(this.state.city === '') 
           this.setState({city_err: 'Required Field'});
          if(this.state.name === '') 
              this.setState({name_err: 'Required Field'});
          if(this.state.email === '')
              this.setState({email_err: 'Required Field'});
          if(this.state.subject === '')
             this.setState({subject_err: 'Required Field'});
         if(this.state.message === '')
             this.setState({message_err: 'Required Field'});

             if(this.state.object === '' || this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '')
             {
                this.setState({return_msg: 'Fill All First', flag: true });
             }
             else
             {
                this.setState({return_msg: 'Success.', flag: true});
             }
      }
    render(){

    return(
 
    <Fragment>
        <div className="contact-form"> 
            <div id="message">
                {this.state.flag ? 
                        <div className="alert alert-success">
                        <strong>{this.state.return_msg}</strong>
                        </div>
                    : null}
            </div> 
            <form method="post" id="contact-form">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-lg-12 form-group1">
                        <label>
                          <p>Väls vilket tjänst du är intresserad av?</p>
                          <select className="con-field" value={this.state.value} onChange={this.handleChange}>
                          <option value="grapefruit">Hemstädning</option>
                          <option value="lime">Storstädning</option>
                          <option value="coconut">Flyttstäd</option>
                          <option value="mango">Golvård</option>
                          <option value="lime">Byggstädning</option>
                          <option value="coconut">Trappstäd</option>
                          <option value="mango">Kontorstädning</option>
                          <option value="lime">Fönsterputsning</option>
                          <option value="coconut">Tradgårdsarbete</option>
                         </select>
                          </label>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <p>Var ligger objektet?</p>
                            <input type="text" className="con-field" value={this.state.object} onChange={this.handleChangeObject} id="user-object" placeholder="Stadsdel" />
                            <span id="err">{this.state.object_err}</span>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <p>Antal KVM</p>
                            <input type="number" id="kvm" value={this.state.kvm} onChange={this.handleChangeKvm} className="con-field" placeholder="Antal KVM" />
                            <span id="err">{this.state.kvm_err}</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-lg-12 form-group1">
                        <label>
                          <p>Välj typ av Objekt :</p>
                          <select className="con-field" value={this.state.value} onChange={this.handleChange}>
                          <option value="grapefruit">Lägenhet</option>
                          <option value="lime">Villa</option>
                          <option value="coconut">Kontor</option>
                          <option value="mango">Hotell och Restauranger</option>
                          <option value="mango">Lagerstädning </option>
                          <option value="mango">Matt och Möbeltvätt </option>
                          <option value="mango">Annat </option>
                         </select>
                          </label>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <p>Antal Rum:</p>
                            <input type="number" className="con-field" value={this.state.rum} onChange={this.handleChangeRum} id="user-rum" placeholder="Antal Rum" />
                            <span id="err">{this.state.rum_err}</span>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <p>Antal Fönster:</p>
                            <input type="number" className="con-field" value={this.state.window} onChange={this.handleChangeWindow} id="user-window" placeholder="Antal Fönster" />
                            <span id="err">{this.state.window_err}</span>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-12">
                            <textarea name="comments" id="user-message" value={this.state.message} onChange={this.handleChangeMessage} rows="6" className="con-field" placeholder="Beskriv gärna dina frågar"></textarea>
                            <span id="err">{this.state.message_err}</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="col-lg-12 form-group1">
                            <input type="text" id="name" value={this.state.name} onChange={this.handleChangeName} className="con-field" placeholder="Namm/Företag" />
                            <span id="err">{this.state.name_err}</span>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <input type="text" id="address" value={this.state.address} onChange={this.handleChangeAddress} className="con-field" placeholder="Adress" />
                            <span id="err">{this.state.adress_err}</span>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <input type="text" id="city" value={this.state.city} onChange={this.handleChangeCity} className="con-field" placeholder="Ort" />
                            <span id="err">{this.state.city_err}</span>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <input type="text" className="con-field" value={this.state.email} onChange={this.handleChangeEmail} id="user-email" placeholder="E-Post" />
                            <span id="err">{this.state.email_err}</span>
                        </div>

                        </div>
                        <div className="col-lg-6">
                        <div className="col-lg-12 form-group1">
                            <input type="text" id="name" value={this.state.contactperson} onChange={this.handleChangeContact} className="con-field" placeholder="Kontaktperson/Företag" />
                            <span id="err">{this.state.contactperson_err}</span>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <input type="text" id="post-code" value={this.state.postcode} onChange={this.handleChangePostCode} className="con-field" placeholder="Postnummer" />
                            <span id="err">{this.state.postcode_err}</span>
                        </div>
                        <div className="col-lg-12 form-group1">
                            <input type="tel" id="phone-number" value={this.state.phone} onChange={this.handleChangePhoneNumber} className="con-field" placeholder="Telefon" />
                            <span id="err">{this.state.phone_err}</span>
                        </div>

                        </div>
                        <div className="submit-area col-lg-12"> 
                        <button id="submit-contact" type="button" name="send" onClick={this.handleSubmit1} className="btn-alt" value="get a quote"> Skicka Meddelande</button>
                        <div id="simple-msg"></div>
                        </div>

                </div>
            </form>
        </div>
    </Fragment> 
 
 
        )

    }
}

 
export default ContactForm;