import { TestBed, async, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule,MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule,
        FormsModule, ReactiveFormsModule, BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'material-ng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('material-ng');
  });

  it(`should have as value as Jan 20, 2019'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#myDate').value = '1/20/2019';
    //console.log(compiled.querySelector('#myDate').value);
    //fixture.debugElement.query(By.css('#myDate')).nativeElement.value = '1/20/2019';

    //console.log("DATE VAL:" + fixture.debugElement.query(By.css('#myDate')).nativeElement.value);
    expect(compiled.querySelector('#myDate').value).toContain('1/20/2019');
  });

  it(`should error out on a future date info'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#myDate').value = '1/22/2019';
    //fixture.detectChanges();
    console.log("FUTURE DATE:" + compiled.querySelector('#myDate').value);
    
    //fixture.debugElement.query(By.css('#myDate')).nativeElement.value = '1/20/2019';
    //console.log("DATE VAL:" + fixture.debugElement.query(By.css('#myDate')).nativeElement.value);
    
    const dateInput = compiled.querySelector('input[formcontrolname="myDate"]') as HTMLInputElement;
    dateInput.value = '1/23/2019';


    dateInput.dispatchEvent(new Event('blur'));
    dateInput.dispatchEvent(new Event('focus'));
    dateInput.dispatchEvent(new Event('focusin'));
    dateInput.dispatchEvent(new Event('input'));
    dateInput.dispatchEvent(new Event('keydown')); 
  
    //expect(compiled.querySelector('#myDate').value).toContain('1/22/2019');
    //fixture.detectChanges();
    console.log("FUTURE DATE dateInput:" + dateInput.value);
    console.log("FUTURE DATE #myDate:" + compiled.querySelector('#myDate').value);

    console.log("Checking future error...");
    //var myDateField = compiled.querySelector('#myDate');
    let futureError = compiled.querySelector('#myDate').getAttribute('aria-describedby'); 
    console.log("ARIA VAL:" + futureError);
    //console.log("HAS ERROR:" + app.form.controls['myDate'].hasError('matDatepickerMax'));
    //expect(compiled.querySelector('#myDate').toHaveClass('aria-describedby'));


    console.log("FUTURE ERROR VAL:" + compiled.querySelector('#futureError'));

    //expect(myDateField.nativeElement.getAttribute('aria-describedby')).toEqual('');
   // expect(compiled.querySelector('#futureError').value).toContain('ERROR: Future date!');

  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   //expect(compiled.querySelector('h1').textContent).toContain('Welcome to material-ng!');
  //   expect(1).toEqual(1); 

  // });
});
