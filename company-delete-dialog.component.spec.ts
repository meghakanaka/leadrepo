import { ComponentFixture, TestBed, async, inject,TestComponentRenderer} from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions,Response } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { JhiLanguageService } from 'ng-jhipster';
import { MockLanguageService } from '../../helpers/mock-language.service';
import { MockActivatedRoute } from '../../helpers/mock-route.service';
import { CompanyDeleteDialogComponent } from '../../../../../main/webapp/app/entities/company/company-delete-dialog.component';
import { CompanyService } from '../../../../../main/webapp/app/entities/company/company.service';
import { Company } from '../../../../../main/webapp/app/entities/company/company.model';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from 'ng-jhipster'; 
import { By }           from '@angular/platform-browser';
import { DebugElement,Component }    from '@angular/core';
import { SppmAlertService } from '../../../../../main/webapp/app/shared/alert/sppm-alert.service';

import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';


 
describe('Component Tests company-delete-dialog', () => {

  
  // For Debugging HTML Elements

    describe('company-delete-dialog', () => {
        let comp: CompanyDeleteDialogComponent;
        let fixture: ComponentFixture<CompanyDeleteDialogComponent>;
        let service:CompanyService;
         let de:      DebugElement;
        let el:      HTMLElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [CompanyDeleteDialogComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                      {
                        provide: NgbActiveModal,
                        useValue: new Object()
                    },
                    
                     {
                        provide: EventManager,
                        useValue: new Object()
                    },
                       {
                        provide: SppmAlertService ,
                        useValue: new Object()
                    },
                   
                   
                   
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    {
                        provide: JhiLanguageService,
                        useClass: MockLanguageService
                    },
                    CompanyService
                ]
            }).overrideComponent(CompanyDeleteDialogComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CompanyDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CompanyService);
            
            
        });

//1
        describe('On company-delete-dialog 1', () => {
        it('Should call company-delete-dialog method from service',
        inject([CompanyService], (companyservice:CompanyService) => {
          companyservice.delete(20).subscribe((res:Response)=>
          {
                 expect(res).toHaveBeenCalledWith(20);
         })
          }));
  
          });

 //2
       describe('On company-delete-dialog 2', () => {
         it('should create the instance of company-delete-dialog 1', async(() => {
         let fixture = TestBed.createComponent(CompanyDeleteDialogComponent);
         let app = fixture.debugElement.componentInstance;
         expect(app).toBeDefined();
        }));
        });

//3
         describe('company-delete-dialog 3', () => {
         it('should create an instance of company-delete-dialog 2', () => {
         expect(comp).toBeTruthy();
         });
         });


 })})
     