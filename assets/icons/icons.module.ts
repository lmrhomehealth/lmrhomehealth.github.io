import {NgModule} from '@angular/core';
import {LeftArrowIcon} from './left-arrow-icon/left-arrow-icon';
import {RightArrowIcon} from './right-arrow-icon/right-arrow-icon';
import {DoctorIcon} from './doctor-icon/doctor-icon';
import {HandHealthIcon} from './hand-health-icon/hand-health-icon';
import {LabIcon} from './lab-icon/lab-icon';
import {CooperationIcon} from './cooperation-icon/cooperation-icon';
import {PhysicalIcon} from './physical-icon/physical-icon';
import {NurseIcon} from './nurse-icon/nurse-icon';
import {SpeechIcon} from './speech-icon/speech-icon';
import {HomeCareIcon} from './home-care-icon/home-care-icon';
import {HomeNursingIcon} from './home-nursing-icon/home-nursing-icon';
import {HamburgerIcon} from './hamburger-icon/hamburger-icon';

@NgModule({
    declarations: [
        LeftArrowIcon,
        RightArrowIcon,
        DoctorIcon,
        HandHealthIcon,
        LabIcon,
        CooperationIcon,
        PhysicalIcon,
        NurseIcon,
        SpeechIcon,
        HomeCareIcon,
        HomeNursingIcon,
        HamburgerIcon
    ],
    exports: [
        LeftArrowIcon,
        RightArrowIcon,
        DoctorIcon,
        HandHealthIcon,
        LabIcon,
        CooperationIcon,
        PhysicalIcon,
        NurseIcon,
        SpeechIcon,
        HomeCareIcon,
        HomeNursingIcon,
        HamburgerIcon
    ],
})
export class IconsModule {
}
