var screenHeight;
var extraPriceSqft = false;
var sectionsCompleted = 0;
var section1Result, section2WhosInfoResult, section2Result;
var section3YourFirstName, section3YourLastName, section3YourPhone, section3YourEmail, section3YourConfirm;
var section3AgentFirstName, section3AgentLastName, section3AgentPhone, section3AgentEmail, section3AgentConfirm;
var section4Property, section4Address, section4City, section4Zip, section4LastPrice, section4Sqft;
var section4HomeOwnAppoit, section4YNFirstName, section4YNLastName, section4YNPhone;
var section5Ready, section5Date;
var section6Appointment;
var section8Entry, section8Combination, section8CBS;
var section9Pictures;
var section10Drone;
var section11PhotoOrVideo, section11FocusOn, section11a5AerialDronePhotos;
var HDVideoType;
var section15dollHouse;
var section16Flyer, section16Twilight, section16YouTube;
var section17Photo, section17Video, section17AddNotes;
var section18HearOfUs, section18NFirstName, section18NLastName;
var sec2Other = 0;
var sec5Other = 0;
var sec6Other = 0;
var sec7Other = 0;
var sec82Other = 0;
var sec8Other = 0;
var sec9Other = 0;
var sec115Other = 0;
var sec18Other = 0;
// var autoNumForListPrice = true;
// var autoNumForSqft = true;

var formButtons = {
    Sec1Butt1 : {active: 'sprite-yes-active', inactive: 'sprite-yes', id: '#yesFirstButton',
    testClick: function() {if(section1Result == 'yes') {return false;}else{return true;} } },
    Sec1Butt2 : {active: 'sprite-no-active', inactive: 'sprite-no', id: '#noFirstButton',
    testClick: function() {if(section1Result == 'no') {return false;}else{return true;} } },    
    Sec2Butt1 : {active: 'sprite-2_0_agent-active', inactive: 'sprite-2_0_agent', id: '#agentButton',
    testClick: function() {if(section2Result == 'agent') {return false;}else{return true;} } },
    Sec2Butt2 : {active: 'sprite-2_1_assistant-active', inactive: 'sprite-2_1_assistant', id: '#assistantButton',
    testClick: function() {if(section2Result == 'assistant') {return false;}else{return true;} } },
    Sec2Butt3 : {active: 'sprite-2_2_homeowner-active', inactive: 'sprite-2_2_homeowner', id: '#homeownerButton',
    testClick: function() {if(section2Result == 'homeowner') {return false;}else{return true;} } },    
    Sec3Butt1 : {active: 'sprite-4_0_mine-active', inactive: 'sprite-4_0_mine', id: '#mineFirstButton',
    testClick: function() {if(section2WhosInfoResult == 'mine') {return false;}else{return true;} } },
    Sec3Butt2 : {active: 'sprite-4_1_an-agent_s-active', inactive: 'sprite-4_1_an-agent_s', id: '#anAgentsFirstButton',
    testClick: function() {if(section2WhosInfoResult == 'agents') {return false;}else{return true;} } },

    Sec4Butt1 : {active: 'sprite-11_0_vacant-active', inactive: 'sprite-11_0_vacant', id: '#vacantFirstButton' ,
    testClick: function() {if(section4Property == 'vacant') {return false;}else{return true;} } },
    Sec4Butt2 : {active: 'sprite-11_1_occupied-active', inactive: 'sprite-11_1_occupied', id: '#occupiedFirstButton',
    testClick: function() {if(section4Property == 'occupied') {return false;}else{return true;} } },

    Sec4YNButt1 : {active: 'sprite-yes-active', inactive: 'sprite-yes', id: '#section4YesButton1' ,
    testClick: function() {if(section4HomeOwnAppoit == 'yes') {return false;}else{return true;} } },
    Sec4YNButt2 : {active: 'sprite-no-active', inactive: 'sprite-no', id: '#section4NoButton2',
    testClick: function() {if(section4HomeOwnAppoit == 'no') {return false;}else{return true;} } },

    Sec5Butt1 : {active: 'sprite-20_0_immediately-active', inactive: 'sprite-20_0_immediately', id: '#ImmediButton' ,
    testClick: function() {if(section5Ready == 'immediatly') {return false;}else{return true;} } },
    Sec5Butt2 : {active: 'sprite-20_1_specific-date-active', inactive: 'sprite-20_1_specific-date', id: '#specificButton',
    testClick: function() {if(section5Ready == 'specificDate') {return false;}else{return true;} } },

    Sec6Butt1 : {active: 'sprite-goanytime-blue', inactive: 'sprite-goanytime-grey', id: '#goAnyButton' ,
    testClick: function() {if(section6Appointment == 'anyTime') {return false;}else{return true;} } },
    Sec6Butt2 : {active: 'sprite-26_1_need-appointment-active', inactive: 'sprite-26_1_need-appointment', id: '#needAppoButton',
    testClick: function() {if(section6Appointment == 'needAppointment') {return false;}else{return true;} } },

    Sec7Butt1 : {active: 'sprite-goanytime-blue', inactive: 'sprite-goanytime-grey', id: '#goAnyButtonSection7',
    testClick: function() {if(section6Appointment == 'anyTime') {return false;}else{return true;} } },
    Sec7Butt2 : {active: 'sprite-26_1_need-appointment-active', inactive: 'sprite-26_1_need-appointment', id: '#needAppoButtonSection7' ,
    testClick: function() {if(section6Appointment == 'needAppointment') {return false;}else{return true;} } },

    Sec82Butt1 : {active: 'sprite-28_0_combo-active', inactive: 'sprite-28_0_combo', id: '#comboLockButtonSection82' ,
    testClick: function() {if(section8Entry == 'comboLockbox') {return false;}else{return true;} } },
    Sec82Butt2 : {active: 'sprite-28_1_supra-active', inactive: 'sprite-28_1_supra', id: '#supraIboxButtonSection82',
    testClick: function() {if(section8Entry == 'supraIBox') {return false;}else{return true;} } },

    Sec83Butt1 : {active: 'sprite-28_0_combo-active', inactive: 'sprite-28_0_combo', id: '#comboLockButtonSection8' ,
    testClick: function() {if(section8Entry == 'comboLockbox') {return false;}else{return true;} } },
    Sec83Butt2 : {active: 'sprite-28_1_supra-active', inactive: 'sprite-28_1_supra', id: '#supraIboxButtonSection8',
    testClick: function() {if(section8Entry == 'supraIBox') {return false;}else{return true;} } },
    Sec83Butt3 : {active: 'sprite-28_2_meeting-active', inactive: 'sprite-28_2_meeting', id: '#meetSomeButtonSection8',
    testClick: function() {if(section8Entry == 'meetingSomeone') {return false;}else{return true;} } },

    Sec9Butt1 : {active: 'sprite-35_0_15photos-active', inactive: 'sprite-35_0_15photos', id: '#section9FiveButtons1' ,
    testClick: function() {if(section9Pictures == '15') {return false;}else{return true;} } },
    Sec9Butt2 : {active: 'sprite-35_1_25photos-active', inactive: 'sprite-35_1_25photos', id: '#section9FiveButtons2',
    testClick: function() {if(section9Pictures == '25') {return false;}else{return true;} } },
    Sec9Butt3 : {active: 'sprite-35_2_36photos-active', inactive: 'sprite-35_2_36photos', id: '#section9FiveButtons3',
    testClick: function() {if(section9Pictures == '36') {return false;}else{return true;} } },
    Sec9Butt4 : {active: 'sprite-35_3_50photos-active', inactive: 'sprite-35_3_50photos', id: '#section9FiveButtons4' ,
    testClick: function() {if(section9Pictures == '50') {return false;}else{return true;} } },
    Sec9Butt5 : {active: 'sprite-none-active', inactive: 'sprite-none', id: '#section9FiveButtons5',
    testClick: function() {if(section9Pictures == 'none') {return false;}else{return true;} } },

    Sec10Butt1 : {active: 'sprite-37_0_yes-drone-active', inactive: 'sprite-37_0_yes-drone', id: '#yesDroneMain' ,
    testClick: function() {if(section10Drone == 'yes') {return false;}else{return true;} } },
    Sec10Butt2 : {active: 'sprite-37_1_no-drone-active', inactive: 'sprite-37_1_no-drone', id: '#noDroneMain',
    testClick: function() {if(section10Drone == 'no') {return false;}else{return true;} } },

    Sec11Butt1 : {active: 'sprite-38_1_photosonly-active', inactive: 'sprite-38_1_photosonly', id: '#photosOnlyButtonSection11' ,
    testClick: function() {if(section11PhotoOrVideo == 'photoOnly') {return false;}else{return true;} } },
    Sec11Butt2 : {active: 'sprite-38_2_photosvideo-active', inactive: 'sprite-38_2_photosvideo', id: '#photosAndVideoButtonSection11',
    testClick: function() {if(section11PhotoOrVideo == 'photoAndVideo') {return false;}else{return true;} } },
    Sec11Butt3 : {active: 'sprite-38_0_video-only-active', inactive: 'sprite-38_0_video-only', id: '#videoOnlyButtonSection11',
    testClick: function() {if(section11PhotoOrVideo == 'videoOnly') {return false;}else{return true;} } },

    Sec115Butt1 : {active: 'sprite-40_0_1aerial-active', inactive: 'sprite-40_0_1aerial', id: '#section11aFiveButtons1' ,
    testClick: function() {if(section11a5AerialDronePhotos == '1') {return false;}else{return true;} } },
    Sec115Butt2 : {active: 'sprite-40_1_5aerial-active', inactive: 'sprite-40_1_5aerial', id: '#section11aFiveButtons2',
    testClick: function() {if(section11a5AerialDronePhotos == '5') {return false;}else{return true;} } },
    Sec115Butt3 : {active: 'sprite-40_2_10aerial-active', inactive: 'sprite-40_2_10aerial', id: '#section11aFiveButtons3',
    testClick: function() {if(section11a5AerialDronePhotos == '10') {return false;}else{return true;} } },
    Sec115Butt4 : {active: 'sprite-40_3_20aerial-active', inactive: 'sprite-40_3_20aerial', id: '#section11aFiveButtons4' ,
    testClick: function() {if(section11a5AerialDronePhotos == '20') {return false;}else{return true;} } },
    Sec115Butt5 : {active: 'sprite-none-active', inactive: 'sprite-none', id: '#section11aFiveButtons5',
    testClick: function() {if(section11a5AerialDronePhotos == 'none') {return false;}else{return true;} } },

    Sec12Butt1 : {active: 'sprite-none1-active', inactive: 'sprite-none1', id: '#section12FiveButtons1' ,
    testClick: function() {if(HDVideoType == 'aerial') {return false;}else{return true;} } },
    Sec12Butt2 : {active: 'sprite-walkthrough-video175blue', inactive: 'sprite-walkthrough-video175grey', id: '#section12ThreeButtons2',
    testClick: function() {if(HDVideoType == 'walkthrough') {return false;}else{return true;} } },
    Sec12Butt3 : {active: 'sprite-cine299blue', inactive: 'sprite-cine299grey', id: '#section12FiveButtons3',
    testClick: function() {if(HDVideoType == 'cinematic') {return false;}else{return true;} } },

    Sec13Butt1 : {active: 'sprite-aerialonly49-active', inactive: 'sprite-aerialonly49', id: '#section13ThreeButtons1' ,
    testClick: function() {if(HDVideoType == 'aerialOnly') {return false;}else{return true;} } },
    Sec13Butt2 : {active: 'sprite-walkthrough-aerial-199-active', inactive: 'sprite-walkthrough-aerial199', id: '#section13ThreeButtons2',
    testClick: function() {if(HDVideoType == 'walkthroughPlusAerial') {return false;}else{return true;} } },
    Sec13Butt3 : {active: 'sprite-cinematic-aerial299-active', inactive: 'sprite-cinematic-aerial299', id: '#section13ThreeButtons3',
    testClick: function() {if(HDVideoType == 'cinematicPlusAerial') {return false;}else{return true;} } },

    Sec15Butt1 : {active: 'sprite-yes-active', inactive: 'sprite-yes', id: '#yesSection15Button' ,
    testClick: function() {if(section15dollHouse == 'dollYes') {return false;}else{return true;} } },
    Sec15Butt2 : {active: 'sprite-no-active', inactive: 'sprite-no', id: '#noSection15Button',
    testClick: function() {if(section15dollHouse == 'dollNo') {return false;}else{return true;} } },

    Sec16Butt1 : {active: 'sprite-flyer-blue', inactive: 'sprite-flyer-grey', id: '#section16ThreeButtons1' ,
    testClick: function() {if(section16Flyer == 'yes') {return false;}else{return true;} } },
    Sec16Butt2 : {active: 'sprite-twilight-blue', inactive: 'sprite-twilight-grey', id: '#section16ThreeButtons2',
    testClick: function() {if(section16Twilight == 'yes') {return false;}else{return true;} } },
    Sec16Butt3 : {active: 'sprite-youtube-blue', inactive: 'sprite-youtube-grey', id: '#section16ThreeButtons3',
    testClick: function() {if(section16YouTube == 'yes') {return false;}else{return true;} } },

    Sec17Butt1 : {active: 'sprite-next-day-by-12-free-blue', inactive: 'sprite-next-day-12-free-grey', id: '#nextDaySection17ButtonLeft1' ,
    testClick: function() {if(section17Photo == 'nextDay') {return false;}else{return true;} } },
    Sec17Butt2 : {active: 'sprite-same-day-by-9-25-blue', inactive: 'sprite-same-day-by-9-grey', id: '#nextDaySection17ButtonLeft2',
    testClick: function() {if(section17Photo == 'sameDay') {return false;}else{return true;} } },
    Sec17Butt3 : {active: 'sprite-4-hours-49-blue', inactive: 'sprite-4-hours-49-grey', id: '#nextDaySection17ButtonLeft3',
    testClick: function() {if(section17Photo == 'fourHours') {return false;}else{return true;} } },

    Sec172Butt1 : {active: 'sprite-2-business-days-by-12-free-blue', inactive: 'sprite-2-business-days-by-12-free-grey', id: '#nextDaySection17ButtonRight1' ,
    testClick: function() {if(section17Video == 'twoBusDays') {return false;}else{return true;} } },
    Sec172Butt2 : {active: 'sprite-next-day-by-9-25-blue', inactive: 'sprite-next-business-day-by-9-25-grey', id: '#nextDaySection17ButtonRight2',
    testClick: function() {if(section17Video == 'nextBusDay9h') {return false;}else{return true;} } },
    Sec172Butt3 : {active: 'sprite-next-business-day-by-12-49-blue', inactive: 'sprite-next-business-day-by-12-49-grey', id: '#nextDaySection17ButtonRight3',
    testClick: function() {if(section17Video == 'nextBusDay12h') {return false;}else{return true;} } },

    Sec18Butt1 : {active: 'sprite-60_0_google-active', inactive: 'sprite-60_0_google', id: '#googleButton',
    testClick: function() {if(section18HearOfUs == 'google') {return false;}else{return true;} } },
    Sec18Butt2 : {active: 'sprite-60_1_referral-active', inactive: 'sprite-60_1_referral', id: '#referralButton',
    testClick: function() {if(section18HearOfUs == 'referral') {return false;}else{return true;} } },

    Sec2OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection2NormalHover',
    otherInputId: '#otherSection2Input', testClick: function() {return true; } },
    Sec5OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection5NormalHover',
    otherInputId: '#otherSection5Input', testClick: function() {return true; } },
    Sec6OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection6NormalHover',
    otherInputId: '#otherSection6Input', testClick: function() {return true; } },
    Sec7OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection7NormalHover',
    otherInputId: '#otherSection7Input', testClick: function() {return true; } },
    Sec82OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection82NormalHover',
    otherInputId: '#otherSection82Input', testClick: function() {return true; } },
    Sec8OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection8NormalHover',
    otherInputId: '#otherSection8Input', testClick: function() {return true; } },
    Sec9OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection9NormalHover',
    otherInputId: '#otherSection9Input', testClick: function() {return true; } },
    Sec115OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection11aNormalHover',
    otherInputId: '#otherSection11aInput', testClick: function() {return true; } },
    Sec18OtherButton : {active: 'sprite-other-active', inactive: 'sprite-other', id: '#otherSection18aNormalHover',
    otherInputId: '#otherSection18aInput', testClick: function() {return true; } },
    SubmitButton : {active: 'sprite-submit-active', inactive: 'sprite-submit ', id: '#submitButton',
    testClick: function() {return true; } },

    resetObjectSection: function(buttNumInObject) {
        var num = buttNumInObject;
        $(num.id).removeClass(num.active);
        $(num.id).removeClass('fadedButton');
        $(num.id).addClass(num.inactive);
    } 
}
// console.log(Object.keys(formButtons).length);

function addHover(buttonNumber) {
    // adds hover effects to all buttons (divs);
    var i = buttonNumber - 1;
    $(formButtons[Object.keys(formButtons)[i]].id + "." + formButtons[Object.keys(formButtons)[i]].inactive).on({
        mouseenter: function() {
            $(formButtons[Object.keys(formButtons)[i]].id).addClass(formButtons[Object.keys(formButtons)[i]].active);
            $(formButtons[Object.keys(formButtons)[i]].id).removeClass(formButtons[Object.keys(formButtons)[i]].inactive);
        },
        mouseleave: function() {
            if (formButtons[Object.keys(formButtons)[i]].testClick()) {
                $(formButtons[Object.keys(formButtons)[i]].id).removeClass(formButtons[Object.keys(formButtons)[i]].active);
                $(formButtons[Object.keys(formButtons)[i]].id).addClass(formButtons[Object.keys(formButtons)[i]].inactive);
            }
            
        },
        click: function() {
            $(formButtons[Object.keys(formButtons)[i]].id).addClass(formButtons[Object.keys(formButtons)[i]].active);
            $(formButtons[Object.keys(formButtons)[i]].id).removeClass(formButtons[Object.keys(formButtons)[i]].inactive);
        }
    });
};

for (var i = 0; i < Object.keys(formButtons).length; i++) {
    addHover(i+1);
}

// for (var i = 0; i < Object.keys(formButtons).length; i++) {
//     var arr = ['Sec17Butt1', 'Sec17Butt2', 'Sec17Butt3', 'Sec172Butt1', 'Sec172Butt2', 'Sec172Butt3'];
//     if ($.inArray(Object.keys(formButtons)[i], arr)) {
//         console.log('za: ' + Object.keys(formButtons)[i] );
//     }else {
//         addHover(i+1);
//     }
// }

function resetSelectionInSection2() {
    // resets section 2 settings
    formButtons.resetObjectSection(formButtons.Sec2Butt1);
    formButtons.resetObjectSection(formButtons.Sec2Butt2);
    formButtons.resetObjectSection(formButtons.Sec2Butt3);
    section2Result = '';
    sec2Other = '';
    // reset 'other'
    formButtons.resetObjectSection(formButtons.Sec2OtherButton);
    $(formButtons.Sec2OtherButton.id).css('display','block');
    $(formButtons.Sec2OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec2OtherButton.otherInputId).val('');
}
function resetSelectionInSection3() {
    // resets section 3 settings
    formButtons.resetObjectSection(formButtons.Sec3Butt1);
    formButtons.resetObjectSection(formButtons.Sec3Butt2);
    section2WhosInfoResult = '';
}
function resetSelectionInSection4() {
    // resets section 4 settings
    formButtons.resetObjectSection(formButtons.Sec4Butt1);
    formButtons.resetObjectSection(formButtons.Sec4Butt2);
    section4Property = '';
}
function resetSelectionInSection4YN() {
    // resets section 4YN settings
    formButtons.resetObjectSection(formButtons.Sec4YNButt1);
    formButtons.resetObjectSection(formButtons.Sec4YNButt2);
    section4HomeOwnAppoit = '';
}
function resetSelectionInSection5() {
    // resets section 5 settings
    formButtons.resetObjectSection(formButtons.Sec5Butt1);
    formButtons.resetObjectSection(formButtons.Sec5Butt2);
    section5Date = '';
    section5Ready = '';
    // reset 'other'
    formButtons.resetObjectSection(formButtons.Sec5OtherButton);
    $(formButtons.Sec5OtherButton.id).css('display','block');
    $(formButtons.Sec5OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec5OtherButton.otherInputId).val('');
}
function resetSelectionInSection6() {
    // resets section 6 settings
    formButtons.resetObjectSection(formButtons.Sec6Butt1);
    formButtons.resetObjectSection(formButtons.Sec6Butt2);
    section5Date = '';
    section6Appointment = '';
    // reset 'other'
    formButtons.resetObjectSection(formButtons.Sec6OtherButton);
    $(formButtons.Sec6OtherButton.id).css('display','block');
    $(formButtons.Sec6OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec6OtherButton.otherInputId).val('');
}
function resetSelectionInSection7() {
    // resets section 7 settings
    formButtons.resetObjectSection(formButtons.Sec7Butt1);
    formButtons.resetObjectSection(formButtons.Sec7Butt2);
    section6Appointment = '';
    // reset 'other'
    formButtons.resetObjectSection(formButtons.Sec7OtherButton);
    $(formButtons.Sec7OtherButton.id).css('display','block');
    $(formButtons.Sec7OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec7OtherButton.otherInputId).val('');
}
function resetSelectionInSection8() {
    // resets section 8 settings
    formButtons.resetObjectSection(formButtons.Sec82Butt1);
    formButtons.resetObjectSection(formButtons.Sec82Butt2);
    formButtons.resetObjectSection(formButtons.Sec83Butt1);
    formButtons.resetObjectSection(formButtons.Sec83Butt2);
    formButtons.resetObjectSection(formButtons.Sec83Butt3);
    section8Entry = '';
    // reset 'other' 82
    formButtons.resetObjectSection(formButtons.Sec82OtherButton);
    $(formButtons.Sec82OtherButton.id).css('display','block');
    $(formButtons.Sec82OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec82OtherButton.otherInputId).val('');
    // reset 'other' second
    formButtons.resetObjectSection(formButtons.Sec8OtherButton);
    $(formButtons.Sec8OtherButton.id).css('display','block');
    $(formButtons.Sec8OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec8OtherButton.otherInputId).val('');
}
function resetSelectionInSection9() {
    // resets section 9 settings
    formButtons.resetObjectSection(formButtons.Sec9Butt1);
    formButtons.resetObjectSection(formButtons.Sec9Butt2);
    formButtons.resetObjectSection(formButtons.Sec9Butt3);
    formButtons.resetObjectSection(formButtons.Sec9Butt4);
    formButtons.resetObjectSection(formButtons.Sec9Butt5);
    section9Pictures = '';
    // reset 'other'
    formButtons.resetObjectSection(formButtons.Sec9OtherButton);
    $(formButtons.Sec9OtherButton.id).css('display','block');
    $(formButtons.Sec9OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec9OtherButton.otherInputId).val('');
}
function resetSelectionInSection10() {
    // resets section 10 settings
    formButtons.resetObjectSection(formButtons.Sec10Butt1);
    formButtons.resetObjectSection(formButtons.Sec10Butt2);
    section10Drone = '';
}
// this one restarts 11b as well
function resetSelectionInSection11() {
    // resets section 11 settings
    formButtons.resetObjectSection(formButtons.Sec11Butt1);
    formButtons.resetObjectSection(formButtons.Sec11Butt2);
    formButtons.resetObjectSection(formButtons.Sec11Butt3);
    // reset 'other'
    formButtons.resetObjectSection(formButtons.Sec115OtherButton);
    $(formButtons.Sec115OtherButton.id).css('display','block');
    $(formButtons.Sec115OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec115OtherButton.otherInputId).val('');

    formButtons.resetObjectSection(formButtons.Sec115Butt1);
    formButtons.resetObjectSection(formButtons.Sec115Butt2);
    formButtons.resetObjectSection(formButtons.Sec115Butt3);
    formButtons.resetObjectSection(formButtons.Sec115Butt4);
    formButtons.resetObjectSection(formButtons.Sec115Butt5);

    section11PhotoOrVideo = '';
    section11a5AerialDronePhotos = '';
}
// f11 does what this one does
function resetSelectionInSection11b() {
    // resets section 11b settings
    formButtons.resetObjectSection(formButtons.Sec115Butt1);
    formButtons.resetObjectSection(formButtons.Sec115Butt2);
    formButtons.resetObjectSection(formButtons.Sec115Butt3);
    formButtons.resetObjectSection(formButtons.Sec115Butt4);
    formButtons.resetObjectSection(formButtons.Sec115Butt5);
    section11a5AerialDronePhotos = '';
    // reset 'other'
    formButtons.resetObjectSection(formButtons.Sec115OtherButton);
    $(formButtons.Sec115OtherButton.id).css('display','block');
    $(formButtons.Sec115OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec115OtherButton.otherInputId).val('');
}
function resetSelectionInSection12() {
    // resets section 12 settings
    formButtons.resetObjectSection(formButtons.Sec12Butt1);
    formButtons.resetObjectSection(formButtons.Sec12Butt2);
    formButtons.resetObjectSection(formButtons.Sec12Butt3);
    HDVideoType = '';
}
function resetSelectionInSection13() {
    // resets section 13 settings
    formButtons.resetObjectSection(formButtons.Sec13Butt1);
    formButtons.resetObjectSection(formButtons.Sec13Butt2);
    formButtons.resetObjectSection(formButtons.Sec13Butt3);
    HDVideoType = '';
}
function resetSelectionInSection15() {
    // resets section 15 settings
    formButtons.resetObjectSection(formButtons.Sec15Butt1);
    formButtons.resetObjectSection(formButtons.Sec15Butt2);
    section15dollHouse = '';
}
function  resetForSection15And16() {
    // resets section 17 settings and 18a
    formButtons.resetObjectSection(formButtons.Sec17Butt1);
    formButtons.resetObjectSection(formButtons.Sec17Butt2);
    formButtons.resetObjectSection(formButtons.Sec17Butt3);
    formButtons.resetObjectSection(formButtons.Sec172Butt1);
    formButtons.resetObjectSection(formButtons.Sec172Butt2);
    formButtons.resetObjectSection(formButtons.Sec172Butt3);  
    formButtons.resetObjectSection(formButtons.Sec18Butt1);
    formButtons.resetObjectSection(formButtons.Sec18Butt2);

    section17Photo = '';
    section17Video = '';
    section18HearOfUs = '';

    // reset 'other'
    formButtons.resetObjectSection(formButtons.Sec18OtherButton);
    $(formButtons.Sec18OtherButton.id).css('display','block');
    $(formButtons.Sec18OtherButton.otherInputId).css('display','none');
    $(formButtons.Sec18OtherButton.otherInputId).val('');
}

//   **********    Button Functions    **********


$('#yesFirstButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec1Butt2);
    $('#noFirstButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 18){
        $('#section2, #section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section2, #section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection2();
        resetSelectionInSection3();
        resetSelectionInSection4();
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
	$('#section2').addClass('sectionShow');
    $('#section2').removeClass('sectionHidden');
	if (sectionsCompleted != 10) {
        $('html, body').animate({
            scrollTop: ($("#section2").offset().top + $("#section2").height() - 0.70*$(window).height())
        }, 500);
    } 
    section1Result = 'yes';
    if(sectionsCompleted < 10 ){sectionsCompleted= 10;}; //doesn't reset form
    // all buttons that open a possible 'other' input must do test. If that next 'other' is already filled, appropriate test section will run automatically
    // hmm OR NOT. maybe it's better to reset 'other' inputs in their appropriate resSection() functions
});
$('#noFirstButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec1Butt1);
    $('#yesFirstButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 18){
        $('#section2, #section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section2, #section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection2();
        resetSelectionInSection3();
        resetSelectionInSection4();
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
	$('#section2').addClass('sectionShow');
    $('#section2').removeClass('sectionHidden');
    if (sectionsCompleted != 10) {
    	$('html, body').animate({
            scrollTop: ($("#section2").offset().top + $("#section2").height() - 0.70*$(window).height())
        }, 500);
    }
    section1Result = 'no';
    if(sectionsCompleted < 10 ){sectionsCompleted= 10;};
});

// AKO section2 NIJE JEDNAK VREDNOSTI OVE SEKCIJE.... ANIMIRAJ (MOZDA TAKO DA SE RESHI)

// Section 2
$('#agentButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec2Butt2);
    formButtons.resetObjectSection(formButtons.Sec2Butt3);
    $('#assistantButton, #homeownerButton, #otherSection2NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 20){
        $('#section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection3();
        resetSelectionInSection4();
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection2Input').val('');
    sec2Other = 0;
    $('#otherSection2NormalHover').css('display','block');
    $('#otherSection2Input').css('display','none');
	$('#section3').addClass('sectionShow');
	$('#section3').removeClass('sectionHidden');
	$('#section3 > h3:nth-child(3), #yourInfo').css('display', 'block');
	$('#section3 > h3:nth-child(1), #agentInfo, #section3 > h3:nth-child(5), #section3FirstButtons').css('display', 'none');
	if ( (sectionsCompleted == 19) || (sectionsCompleted == 20) || (sectionsCompleted == 21) ) {
        console.log('u iFU je sectionsCompleted: ' + sectionsCompleted);      
    }else{
        console.log('sada ne treba da animiram');
        $('html, body').animate({
            scrollTop: ($("#section3").offset().top + $("#section3").height() - 0.70*$(window).height())
        }, 500);
    }
    section2Result = 'agent';
    sectionsCompleted = 21;

    // If next inputs are already filled in, make sure 'test' function of next sections is gonna run
    SendRequest();
});

$('#assistantButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec2Butt1);
    formButtons.resetObjectSection(formButtons.Sec2Butt3);
    $('#agentButton, #homeownerButton, #otherSection2NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 20){
        $('#section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection3();
        resetSelectionInSection4();
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection2Input').val('');
    sec2Other = 0;
    $('#otherSection2NormalHover').css('display','block');
    $('#otherSection2Input').css('display','none');
	$('#section3').addClass('sectionShow');
	$('#section3').removeClass('sectionHidden');
	$('#section3 > h3:nth-child(3), #yourInfo, #section3 > h3:nth-child(5), #agentInfo').css('display', 'block');
	$('#section3 > h3:nth-child(1), #section3FirstButtons').css('display', 'none');
    if ( (sectionsCompleted == 19) || (sectionsCompleted == 20) || (sectionsCompleted == 21) ) {
        console.log('u iFU je sectionsCompleted: ' + sectionsCompleted);      
    }else{
        console.log('sada ne treba da animiram');
        $('html, body').animate({
            scrollTop: ($("#section3").offset().top + $("#section3").height() - 0.70*$(window).height())
        }, 500);
    }
    section2Result = 'assistant';
    sectionsCompleted = 21;
    
    SendRequest();
});

$('#homeownerButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec2Butt2);
    formButtons.resetObjectSection(formButtons.Sec2Butt1);
    $('#agentButton, #assistantButton, #otherSection2NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 20){
        $('#section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection3();
        resetSelectionInSection4();
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection2Input').val('');
    sec2Other = 0;
    $('#otherSection2NormalHover').css('display','block');
    $('#otherSection2Input').css('display','none');
	$('#section3').addClass('sectionShow');
	$('#section3').removeClass('sectionHidden');
	$('#section3 > h3:nth-child(1), #section3FirstButtons').css('display', 'block');
	$('#section3 > h3:nth-child(3), #yourInfo, #section3 > h3:nth-child(5), #agentInfo').css('display', 'none');
    if ( (sectionsCompleted == 19) || (sectionsCompleted == 20) || (sectionsCompleted == 21) ) {
            console.log('u iFU je sectionsCompleted: ' + sectionsCompleted);      
        }else{
            console.log('sada ne treba da animiram');
        $('html, body').animate({
            scrollTop: ($("#section3").offset().top + $("#section3").height() - 0.70*$(window).height())
        }, 500);
    }
    section2Result = 'homeowner';
    sectionsCompleted = 20;
    // HIDE ALL NEXT Sections ???
});

//other   
$('#otherSection2NormalHover').click(function(){
    formButtons.resetObjectSection(formButtons.Sec2Butt1);
    formButtons.resetObjectSection(formButtons.Sec2Butt2);
    formButtons.resetObjectSection(formButtons.Sec2Butt3);
    $('#agentButton, #assistantButton, #homeownerButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 20){
        $('#section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section3, #section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection3();
        resetSelectionInSection4();
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
        $('html, body').animate({
        scrollTop: ($("#otherSection2NormalHover").offset().top + $("#otherSection2NormalHover").height() - 0.70*$(window).height())
    }, 500);
    }
    section2Result = '';
    sec2Other = 1;
    $(this).css('display','none');
    $('#otherSection2Input').css('display','block').focus();
    sectionsCompleted = 19; 
});
function testSection2Other() {
    if  ((sec2Other == 1) && (sectionsCompleted<20)) { 
        section2Result = $('#otherSection2Input').val();
        console.log('section2Result je: ' + section2Result);
        $('#section3').addClass('sectionShow');
        $('#section3').removeClass('sectionHidden');
        $('#section3 > h3:nth-child(1), #section3FirstButtons').css('display', 'block');
        $('#section3 > h3:nth-child(3), #yourInfo, #section3 > h3:nth-child(5), #agentInfo').css('display', 'none'); 
        if (sectionsCompleted == 19) {
            $('html, body').animate({
                scrollTop: ($("#section3").offset().top + $("#section3").height() - 0.70*$(window).height())
            }, 500);
        }
        sectionsCompleted = 20;       
    }
}

// Section 3

$('#mineFirstButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec3Butt2);
    $('#anAgentsFirstButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 30){
        $('#section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section4, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection4();
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
	$('#section3 > h3:nth-child(3), #yourInfo').css('display', 'block');
	$('#section3 > h3:nth-child(5), #agentInfo').css('display', 'none');
    $('#anAgentsFirstButton').addClass('sprite-4_1_an-agent_s');
    $('#anAgentsFirstButton').removeClass('sprite-4_1_an-agent_s-active');
	$('html, body').animate({
        scrollTop: ($("#yourInfoForm").offset().top + $("#yourInfoForm").height() - 0.70*$(window).height())
    }, 500);
    section2WhosInfoResult = 'mine';
    sectionsCompleted = 21; 
    
    SendRequest();
});

$('#anAgentsFirstButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec3Butt1);
    $('#mineFirstButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 30){
        $('#section4, #section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section4, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection4();
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
	$('#section3 > h3:nth-child(5), #agentInfo, #section3 > h3:nth-child(3), #yourInfo').css('display', 'block');
    $('#mineFirstButton').addClass('sprite-4_0_mine');
    $('#mineFirstButton').removeClass('sprite-4_0_mine-active');
	$('html, body').animate({
        scrollTop: ($("#yourInfoForm").offset().top + $("#yourInfoForm").height() - 0.70*$(window).height())
    }, 500);
    section2WhosInfoResult = 'agents';
    sectionsCompleted = 21;
    
    SendRequest();
});

function showSection4() {
    if (sectionsCompleted <= 30) {
        $('#section4').addClass('sectionShow');
        $('#section4').removeClass('sectionHidden');
        $('#vacantFormMain, #listSqftMain, #testEmailCorrcetion, #testAgentsEmailCorrcetion').addClass('sectionHidden');
        $('#vacantFormMain, #listSqftMain, #testEmailCorrcetion, #testAgentsEmailCorrcetion').removeClass('sectionShow');
        if (sectionsCompleted != 30) {
            $('html, body').animate({
                scrollTop: ($("#section4").offset().top + $("#section4").height() - 0.70*$(window).height())
            }, 500);
        }
        sectionsCompleted = 30;
        confirmEmailTests();
    }
}

function testSection3() {
    if(sectionsCompleted == 21) {
        switch(section2Result) {
            case ('agent'):
                console.log('agents....');
                console.log('pattPhoneYour je: ' + pattPhoneYour);
                if ( (section3YourEmail == section3YourConfirm) && pattPhoneYour && pattEmailYour && section3YourFirstName && section3YourLastName && section3YourPhone && section3YourEmail && section3YourConfirm) {
                    showSection4(); 
                }
                break;
            case ('assistant'):
                console.log('assistant....');
                if ( (section3YourEmail == section3YourConfirm) && (section3AgentEmail == section3AgentConfirm) && pattPhoneYour && pattPhoneAgent && pattEmailYour && pattEmailAgent && section3YourFirstName && section3YourLastName && section3YourPhone && section3YourEmail && section3YourConfirm && section3AgentFirstName && section3AgentLastName && section3AgentPhone && section3AgentEmail && section3AgentConfirm) {
                    showSection4();
                }
                break;
            case ('homeowner'):
                if (section2WhosInfoResult == 'mine') {
                    if ( (section3YourEmail == section3YourConfirm) && pattPhoneYour && pattEmailYour && section3YourFirstName && section3YourLastName && section3YourPhone && section3YourEmail && section3YourConfirm) {
                        showSection4(); 
                    }
                }
                if (section2WhosInfoResult == 'agents') {
                    if ( (section3YourEmail == section3YourConfirm) && (section3AgentEmail == section3AgentConfirm) && pattPhoneYour && pattPhoneAgent && pattEmailYour && pattEmailAgent &&  section3YourFirstName && section3YourLastName && section3YourPhone && section3YourEmail && section3YourConfirm && section3AgentFirstName && section3AgentLastName && section3AgentPhone && section3AgentEmail && section3AgentConfirm) {
                        showSection4(); 
                    }
                }
                break;
            default:
                if ((sec2Other == 1) && (sectionsCompleted >= 21)) {
                    if (section2WhosInfoResult == 'mine') {
                        if ( (section3YourEmail == section3YourConfirm) && pattPhoneYour && pattEmailYour && section3YourFirstName && section3YourLastName && section3YourPhone && section3YourEmail && section3YourConfirm) {
                            showSection4(); 
                        }
                    }
                    if (section2WhosInfoResult == 'agents') {
                        if ( (section3YourEmail == section3YourConfirm) && (section3AgentEmail == section3AgentConfirm) && pattPhoneYour && pattPhoneAgent && pattEmailYour && pattEmailAgent &&  section3YourFirstName && section3YourLastName && section3YourPhone && section3YourEmail && section3YourConfirm && section3AgentFirstName && section3AgentLastName && section3AgentPhone && section3AgentEmail && section3AgentConfirm) {
                            showSection4(); 
                        }
                    } 
                }
        }
    }
}

// Section 4

$('#vacantFirstButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec4Butt2);
    $('#occupiedFirstButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 38){
        $('#section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#vacantFormMain').removeClass('sectionHidden');
    $('#vacantFormMain').addClass('sectionShow');
    $('html, body').animate({
        scrollTop: ($("#section4").offset().top + $("#section4").height() - 0.70*$(window).height())
    }, 500);
    section4Property = 'vacant';
    sectionsCompleted = 31;
    SendRequest();
});
$('#occupiedFirstButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec4Butt1);
    $('#vacantFirstButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 38){
        $('#section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section4YesNo, #section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection4YN();
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#vacantFormMain').removeClass('sectionHidden');
    $('#vacantFormMain').addClass('sectionShow');
    $('html, body').animate({
        scrollTop: ($("#section4").offset().top + $("#section4").height() - 0.70*$(window).height())
    }, 500);
    section4Property = 'occupied';
    sectionsCompleted = 31;
    SendRequest();
});

function testSection4a() {
    if (sectionsCompleted == 31) {
        if ( section4Address && section4City && section4Zip && ($('#zipCodeAddress').val().length == 5) ) {
            $('#listSqftMain').removeClass('sectionHidden');
            $('#listSqftMain').addClass('sectionShow');
            $('html, body').animate({
                scrollTop: ($("#section4").offset().top + $("#section4").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 32;
        }
    }
}

function testSection4b() {
    if (sectionsCompleted == 32) {
        if ( ($('#listPrice').val().length > 1) && ($('#sqftInput').val().length > 5) ) {
            if ( (section2Result == 'assistant') || (section2Result == 'agent') ) {
                $('#section4YesNo').removeClass('sectionHidden');
                $('#section4YesNo').addClass('sectionShow');
                $('#hoeownerForm').removeClass('sectionShow');
                $('#hoeownerForm').addClass('sectionHidden');
                $('html, body').animate({
                    scrollTop: ($("#section4YesNo").offset().top + $("#section4YesNo").height() - 0.70*$(window).height())
                }, 500);
            }else {
                $('#section5').removeClass('sectionHidden');
                $('#section5').addClass('sectionShow');
                $('#dateSpecificMain').removeClass('sectionShow');
                $('#dateSpecificMain').addClass('sectionHidden');
                $('html, body').animate({
                    scrollTop: ($("#section5").offset().top + $("#section5").height() - 0.70*$(window).height())
                }, 500);

            }
            sectionsCompleted = 33;
        }
    }
}

// Section 4YesNo

$('#section4YesButton1').click(function(){
    formButtons.resetObjectSection(formButtons.Sec4YNButt2);
    $('#section4NoButton2').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 45){
        $('#section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#hoeownerForm').removeClass('sectionHidden');
    $('#hoeownerForm').addClass('sectionShow');
    if ((sectionsCompleted == 40) || (sectionsCompleted == 39)) {

    }else{
        $('html, body').animate({
            scrollTop: ($("#hoeownerForm").offset().top + $("#hoeownerForm").height() - 0.70*$(window).height())
        }, 500);
    }
    section4HomeOwnAppoit = 'yes';
    sectionsCompleted = 39;
    
    SendRequest();
});
$('#section4NoButton2').click(function(){
    formButtons.resetObjectSection(formButtons.Sec4YNButt1);
    $('#section4YesButton1').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 45){
        $('#section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section5, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#hoeownerForm, #dateSpecificMain').addClass('sectionHidden');
    $('#hoeownerForm, #dateSpecificMain').removeClass('sectionShow');
    $('#section5').removeClass('sectionHidden');
    $('#section5').addClass('sectionShow');
    if ((sectionsCompleted == 40) || (sectionsCompleted == 39)) {

    }else{
        $('html, body').animate({
            scrollTop: ($("#section5").offset().top + $("#section5").height() - 0.70*$(window).height())
        }, 500);
    }
    section4HomeOwnAppoit = 'no';
    sectionsCompleted = 40;
    
    SendRequest();
});
function testSection4YesNo() {
    if ( (section4HomeOwnAppoit == 'yes') && (sectionsCompleted == 39) ){
        // if ( (section4YNPhone != section3YourPhone) && (section4YNPhone != section3AgentPhone) && (section4YNEmail != section3YourEmail) && (section4YNEmail != section3AgentEmail) && pattPhoneHomeowner && section4YNFirstName && section4YNLastName && section4YNPhone && section4YNEmail) {
        if ( pattPhoneHomeowner && section4YNFirstName && section4YNLastName && section4YNPhone) {
            $('#section5').removeClass('sectionHidden');
            $('#section5').addClass('sectionShow');
            $('#dateSpecificMain').addClass('sectionHidden');
            $('#dateSpecificMain').removeClass('sectionShow');
            $('html, body').animate({
                scrollTop: ($("#section5").offset().top + $("#section5").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 40;
        }
    }
}

// Section 5

$('#ImmediButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec5Butt2);
    $('#specificButton, #otherSection5NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 50){
        $('#section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection5Input').val('');
    sec5Other = 0;
    $('#otherSection5NormalHover').css('display','block');
    $('#otherSection5Input').css('display','none');
    $('#section6').removeClass('sectionHidden');
    $('#section6').addClass('sectionShow');
    $('#dateSpecificMain').addClass('sectionHidden');
    $('#dateSpecificMain').removeClass('sectionShow');
    if ( (sectionsCompleted == 45) || (sectionsCompleted == 50) ) {
        console.log('ne animiram 5');
    }else{$('html, body').animate({
            scrollTop: ($("#section6").offset().top + $("#section6").height() - 0.70*$(window).height())
        }, 500);        
    }
    section5Ready = 'immediatly';
    sectionsCompleted = 50;
    // HIDE ALL NEXT Sections ???
});
$('#specificButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec5Butt1);
    $('#ImmediButton, #otherSection5NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 45){
        $('#section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection5Input').val('');
    sec5Other = 0;
    $('#otherSection5NormalHover').css('display','block');
    $('#otherSection5Input').css('display','none');
    $('#dateSpecificMain').removeClass('sectionHidden');
    $('#dateSpecificMain').addClass('sectionShow');
    if ( (sectionsCompleted == 45) || (sectionsCompleted == 50) ) {
        console.log('ne animiram 5');
    }else{$('html, body').animate({
            scrollTop: ($("#dateSpecificMain").offset().top + $("#dateSpecificMain").height() - 0.70*$(window).height())
        }, 500);
    }
    section5Ready = 'specificDate';
    sectionsCompleted = 45;
    SendRequest();
});
function testSection5() {
    if ( (section5Ready == 'specificDate') && (sectionsCompleted == 45) ){ 

        if (section5Date) {  //If date is inputed ??
            $('#section7').removeClass('sectionHidden');
            $('#section7').addClass('sectionShow');
            $('html, body').animate({
                scrollTop: ($("#section7").offset().top + $("#section7").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 50;
        }else {
            // HIDE ALL NEXT Sections ???
        }
    }
}

//other   
$('#otherSection5NormalHover').click(function(){
    if (sectionsCompleted >= 45){
        $('#dateSpecificMain, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#dateSpecificMain, #section6, #section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection5();
        resetSelectionInSection6();
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
        $('html, body').animate({
        scrollTop: ($("#otherSection5NormalHover").offset().top + $("#otherSection5NormalHover").height() - 0.70*$(window).height())
        }, 500);
    }
    formButtons.resetObjectSection(formButtons.Sec5Butt1);
    formButtons.resetObjectSection(formButtons.Sec5Butt2);
    $('#specificButton, #ImmediButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    sec5Other = 1;
    sectionsCompleted = 49;
    $(this).css('display','none');
    $('#otherSection5Input').css('display','block').focus();
});
$('#otherSection5Input').click(function(){
    sectionsCompleted = 49;
});
function testSection5Other() {
    if  (sectionsCompleted == 49) { 
        section5Ready = $('#otherSection5Input').val();
        console.log('section5Ready je: ' + section5Ready);
        $('#section7').removeClass('sectionHidden');
        $('#section7').addClass('sectionShow');
        $('#dateSpecificMain, #section6').addClass('sectionHidden');
        $('#dateSpecificMain, #section6').removeClass('sectionShow'); 
        if (sectionsCompleted < 50) {
            $('html, body').animate({
                scrollTop: ($("#section7").offset().top + $("#section7").height() - 0.70*$(window).height())
            }, 500);
        }
        sectionsCompleted = 50;       
    }
}

// Section 6

$('#goAnyButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec6Butt2);
    $('#needAppoButton, #otherSection6NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 60){
        $('#section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection6Input').val('');
    sec6Other = 0;
    $('#otherSection6NormalHover').css('display','block');
    $('#otherSection6Input').css('display','none');
    $('#section82FirstTwoButtons').removeClass('sectionHidden');
    $('#section82FirstTwoButtons').addClass('sectionShow');
    $('html, body').animate({
        scrollTop: ($("#section82FirstTwoButtons").offset().top + $("#section82FirstTwoButtons").height() - 0.70*$(window).height())
    }, 500);
    section6Appointment = 'anyTime';
    sectionsCompleted = 60;
});

$('#needAppoButton').click(function(){
    formButtons.resetObjectSection(formButtons.Sec6Butt1);
    $('#goAnyButton, #otherSection6NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 60){
        $('#section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection6Input').val('');
    sec6Other = 0;
    $('#otherSection6NormalHover').css('display','block');
    $('#otherSection6Input').css('display','none');
    $('#section8, #headSection8H3, #section8ThreeButtons').removeClass('sectionHidden');
    $('#section8, #headSection8H3, #section8ThreeButtons').addClass('sectionShow');
    $('#section82FirstTwoButtons').removeClass('sectionShow');
    $('#section82FirstTwoButtons').addClass('sectionHidden');
    $('#combinationSection8InputMain, #supraBoxCbsCodeSection8').removeClass('sectionShow');
    $('#combinationSection8InputMain, #supraBoxCbsCodeSection8').addClass('sectionHidden');
    $('html, body').animate({
        scrollTop: ($("#section8").offset().top + $("#section8").height() - 0.70*$(window).height())
    }, 500);
    section6Appointment = 'needAppointment';
    sectionsCompleted = 60;
});

//other   
$('#otherSection6NormalHover').click(function(){
    formButtons.resetObjectSection(formButtons.Sec6Butt1);
    formButtons.resetObjectSection(formButtons.Sec6Butt2);
    $('#goAnyButton, #needAppoButton').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 60){
        $('#section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section7, #section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
        $('html, body').animate({
        scrollTop: ($("#otherSection6NormalHover").offset().top + $("#otherSection6NormalHover").height() - 0.70*$(window).height())
    }, 500);
    }
    sec6Other = 1;
    sectionsCompleted = 59;
    $(this).css('display','none');
    $('#otherSection6Input').css('display','block').focus();
});
$('#otherSection6Input').click(function(){
    sectionsCompleted = 59;
    });
function testSection6Other() {
    if  (sectionsCompleted == 59) { 
        section6Appointment = $('#otherSection6Input').val();
        console.log('section6Appointment je: ' + section6Appointment);
        $('#section8, #headSection8H3, #section8ThreeButtons').removeClass('sectionHidden');
        $('#section8, #headSection8H3, #section8ThreeButtons').addClass('sectionShow');
        $('#section82FirstTwoButtons').removeClass('sectionShow');
        $('#section82FirstTwoButtons').addClass('sectionHidden');
        $('#combinationSection8InputMain, #supraBoxCbsCodeSection8').removeClass('sectionShow');
        $('#combinationSection8InputMain, #supraBoxCbsCodeSection8').addClass('sectionHidden');        
        if (sectionsCompleted < 60) {
            $('html, body').animate({
                scrollTop: ($("#section8").offset().top + $("#section8").height() - 0.70*$(window).height())
            }, 500);
        }
        sectionsCompleted = 60;       
    }
}

// Section 7 (very similar with 6, gives same outputs)
$('#goAnyButtonSection7').click(function(){
    formButtons.resetObjectSection(formButtons.Sec7Butt2);
    $('#needAppoButtonSection7, #otherSection7NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 70){
        $('#section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection7Input').val('');
    sec7Other = 0;
    $('#otherSection7NormalHover').css('display','block');
    $('#otherSection7Input').css('display','none');
    $('#section82FirstTwoButtons').removeClass('sectionHidden');
    $('#section82FirstTwoButtons').addClass('sectionShow');
    $('#section6').addClass('sectionHidden');
    $('#section6').removeClass('sectionShow');
    $('#section8').removeClass('sectionShow');
    $('#section8').addClass('sectionHidden');
    $('html, body').animate({
        scrollTop: ($("#section82FirstTwoButtons").offset().top + $("#section82FirstTwoButtons").height() - 0.70*$(window).height())
    }, 500);
    section6Appointment = 'anyTime';
    sectionsCompleted = 70;
});

$('#needAppoButtonSection7').click(function(){
    formButtons.resetObjectSection(formButtons.Sec7Butt1);
    $('#goAnyButtonSection7, #otherSection7NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 70){
        $('#section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection7Input').val('');
    sec7Other = 0;
    $('#otherSection7NormalHover').css('display','block');
    $('#otherSection7Input').css('display','none');
    $('#section8, #headSection8H3, #section8ThreeButtons').removeClass('sectionHidden');
    $('#section8, #headSection8H3, #section8ThreeButtons').addClass('sectionShow');
    $('#section6').addClass('sectionHidden');
    $('#section6').removeClass('sectionShow');
    $('#section82FirstTwoButtons').removeClass('sectionShow');
    $('#section82FirstTwoButtons').addClass('sectionHidden');
    $('#combinationSection8InputMain, #supraBoxCbsCodeSection8').removeClass('sectionShow');
    $('#combinationSection8InputMain, #supraBoxCbsCodeSection8').addClass('sectionHidden');
    $('html, body').animate({
        scrollTop: ($("#section8").offset().top + $("#section8").height() - 0.70*$(window).height())
    }, 500);
    section6Appointment = 'needAppointment';
    sectionsCompleted = 70;
});

//other   
$('#otherSection7NormalHover').click(function(){
    if (sectionsCompleted >=70){
        $('#section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section82FirstTwoButtons, #section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection7();
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
        $('html, body').animate({
        scrollTop: ($("#otherSection7NormalHover").offset().top + $("#otherSection7NormalHover").height() - 0.70*$(window).height())
        }, 500);
    }
    formButtons.resetObjectSection(formButtons.Sec7Butt1);
    formButtons.resetObjectSection(formButtons.Sec7Butt2);
    $('#goAnyButtonSection7, #needAppoButtonSection7').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    sec7Other = 1;
    sectionsCompleted = 69;
    $(this).css('display','none');
    $('#otherSection7Input').css('display','block').focus();
});
$('#otherSection7Input').click(function(){
    sectionsCompleted = 69;
    });
function testSection7Other() {
    if  (sectionsCompleted == 69) { 
        section7Entry = $('#otherSection7Input').val();
        console.log('section7Entry je: ' + section7Entry);
        $('#section8, #headSection8H3').removeClass('sectionHidden');
        $('#section8, #headSection8H3').addClass('sectionShow');
        $('#combinationSection8InputMain, #supraBoxCbsCodeSection8').removeClass('sectionShow');
        $('#combinationSection8InputMain, #supraBoxCbsCodeSection8').addClass('sectionHidden');
        if (sectionsCompleted < 70) {
            $('html, body').animate({
                scrollTop: ($("#section8").offset().top + $("#section8").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 70;
        }        
    }
}

// Section section82FirstTwoButtons

$('#comboLockButtonSection82').click(function(){
    formButtons.resetObjectSection(formButtons.Sec82Butt2);
    $('#supraIboxButtonSection82, #otherSection82NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 75){
        $('#section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection8();
         resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection82Input').val('');
    sec82Other = 0;
    $('#otherSection82NormalHover').css('display','block');
    $('#otherSection82Input').css('display','none');
    $('#section8').removeClass('sectionHidden');
    $('#section8').addClass('sectionShow');
    $('#headSection8H3, #section8ThreeButtons, #supraBoxCbsCodeSection8').removeClass('sectionShow');
    $('#headSection8H3, #section8ThreeButtons, #supraBoxCbsCodeSection8').addClass('sectionHidden');
    $('#combinationSection8InputMain').removeClass('sectionHidden');
    $('#combinationSection8InputMain').addClass('sectionShow');

    if (section8Combination){
        $('#section9').removeClass('sectionHidden');
        $('#section9').addClass('sectionShow');
        $('html, body').animate({
            scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
        }, 500);
    }else{
        $('html, body').animate({
            scrollTop: ($("#section8").offset().top + $("#section8").height() - 0.70*$(window).height())
        }, 500);
    }        
    section8Entry = 'comboLockbox';
    sectionsCompleted = 75;
});

$('#supraIboxButtonSection82').click(function(){
    formButtons.resetObjectSection(formButtons.Sec82Butt1);
    $('#comboLockButtonSection82, #otherSection82NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 75){
        $('#section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection82Input').val('');
    sec82Other = 0;
    $('#otherSection82NormalHover').css('display','block');
    $('#otherSection82Input').css('display','none');
    $('#section8').removeClass('sectionHidden');
    $('#section8').addClass('sectionShow');
    $('#headSection8H3, #section8ThreeButtons, #combinationSection8InputMain').removeClass('sectionShow');
    $('#headSection8H3, #section8ThreeButtons, #combinationSection8InputMain').addClass('sectionHidden');
    $('#supraBoxCbsCodeSection8').removeClass('sectionHidden');
    $('#supraBoxCbsCodeSection8').addClass('sectionShow');
    if ($('#cbsCodeSection8Input').val().length == 7){
        $('#section9').removeClass('sectionHidden');
        $('#section9').addClass('sectionShow');
        $('html, body').animate({
            scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
        }, 500);
    }else{
        $('html, body').animate({
            scrollTop: ($("#section8").offset().top + $("#section8").height() - 0.70*$(window).height())
        }, 500);
    }
    section8Entry = 'supraIBox';
    sectionsCompleted = 76;
});

//other
$('#otherSection82NormalHover').click(function(){
    if (sectionsCompleted >= 74){
        $('#section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
        $('html, body').animate({
        scrollTop: ($("#otherSection82NormalHover").offset().top + $("#otherSection82NormalHover").height() - 0.70*$(window).height())
        }, 500);
    }
    formButtons.resetObjectSection(formButtons.Sec82Butt1);
    formButtons.resetObjectSection(formButtons.Sec82Butt2);
    $('#comboLockButtonSection82, #supraIboxButtonSection82').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    sec82Other = 1;
    sectionsCompleted = 74;
    $(this).css('display','none');
    $('#otherSection82Input').css('display','block').focus();
});
$('#otherSection82Input').click(function(){
    sectionsCompleted = 74;
    });
function testSection82Other() {
    if  (sectionsCompleted == 74) { 
        section82Entry = $('#otherSection82Input').val();
        console.log('section82Entry je: ' + section82Entry);
        $('#section9').removeClass('sectionHidden');
        $('#section9').addClass('sectionShow');        
        if (sectionsCompleted < 75) {
            $('html, body').animate({
                scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
            }, 500);          
        }
        sectionsCompleted = 75;       
    }
}

// Section section8

$('#comboLockButtonSection8').click(function(){
    formButtons.resetObjectSection(formButtons.Sec83Butt2);
    formButtons.resetObjectSection(formButtons.Sec83Butt3);
    $('#supraIboxButtonSection8, #meetSomeButtonSection8, #otherSection8NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 75){
        $('#supraBoxCbsCodeSection8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#supraBoxCbsCodeSection8, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection8Input').val('');
    sec8Other = 0;
    $('#otherSection8NormalHover').css('display','block');
    $('#otherSection8Input').css('display','none');
    $('#combinationSection8InputMain').addClass('sectionShow');
    $('#combinationSection8InputMain').removeClass('sectionHidden');
    if (section8Combination){
        $('#section9').removeClass('sectionHidden');
        $('#section9').addClass('sectionShow');
        $('html, body').animate({
            scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
        }, 500);
    }else{
        $('html, body').animate({
            scrollTop: ($("#combinationSection8InputMain").offset().top + $("#combinationSection8InputMain").height() - 0.70*$(window).height())
        }, 500);
    }
    section8Entry = 'comboLockbox';
    sectionsCompleted = 75;
});
$('#supraIboxButtonSection8').click(function(){
    formButtons.resetObjectSection(formButtons.Sec83Butt1);
    formButtons.resetObjectSection(formButtons.Sec83Butt3);
    $('#comboLockButtonSection8, #meetSomeButtonSection8, #otherSection8NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 75){
        $('#combinationSection8InputMain, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#combinationSection8InputMain, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection8Input').val('');
    sec8Other = 0;
    $('#otherSection8NormalHover').css('display','block');
    $('#otherSection8Input').css('display','none');
    $('#supraBoxCbsCodeSection8').addClass('sectionShow');
    $('#supraBoxCbsCodeSection8').removeClass('sectionHidden');
    // nije dovoljno samo ovo, nego i da ima 7 cifara
    if ($('#cbsCodeSection8Input').val().length == 7){
        $('#section9').removeClass('sectionHidden');
        $('#section9').addClass('sectionShow');
        $('html, body').animate({
            scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
        }, 500);
    }else{
        $('html, body').animate({
            scrollTop: ($("#supraBoxCbsCodeSection8").offset().top + $("#supraBoxCbsCodeSection8").height() - 0.70*$(window).height())
        }, 500);
    }
    section8Entry = 'supraIBox';
    sectionsCompleted = 76;
});
$('#meetSomeButtonSection8').click(function(){
    formButtons.resetObjectSection(formButtons.Sec83Butt2);
    formButtons.resetObjectSection(formButtons.Sec83Butt1);
    $('#comboLockButtonSection8, #supraIboxButtonSection8, #otherSection8NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 75){
        $('#supraBoxCbsCodeSection8, #combinationSection8InputMain, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#supraBoxCbsCodeSection8, #combinationSection8InputMain, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection8Input').val('');
    sec8Other = 0;
    $('#otherSection8NormalHover').css('display','block');
    $('#otherSection8Input').css('display','none');
    $('#section9').addClass('sectionShow');
    $('#section9').removeClass('sectionHidden');
    $('html, body').animate({
        scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
    }, 500);
    section8Entry = 'meetingSomeone';
    sectionsCompleted = 80;
});
//other
$('#otherSection8NormalHover').click(function(){
    if (sectionsCompleted >= 75){
        $('#supraBoxCbsCodeSection8, #combinationSection8InputMain, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#supraBoxCbsCodeSection8, #combinationSection8InputMain, #section9, #section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection8();
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    formButtons.resetObjectSection(formButtons.Sec83Butt1);
    formButtons.resetObjectSection(formButtons.Sec83Butt2);
    formButtons.resetObjectSection(formButtons.Sec83Butt3);    
    $('#comboLockButtonSection8, #supraIboxButtonSection8, #meetSomeButtonSection8').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 80){
        $('html, body').animate({
            scrollTop: ($("#otherSection8NormalHover").offset().top + $("#otherSection8NormalHover").height() - 0.70*$(window).height())
        }, 500);
    }
    sec8Other = 1;
    sectionsCompleted = 79;
    $(this).css('display','none');
    $('#otherSection8Input').css('display','block').focus();
});
$('#otherSection8Input').click(function(){
    sectionsCompleted = 79;
    });
function testSection8Other() {
    if  (sectionsCompleted == 79) { 
        section8Entry = $('#otherSection8Input').val();
        console.log('section8Entry je: ' + section8Entry);
        $('#section9').removeClass('sectionHidden');
        $('#section9').addClass('sectionShow');
        if (sectionsCompleted < 80) {            
            $('html, body').animate({
                scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
            }, 500);           
        }
        sectionsCompleted = 80;       
    }
}

function testSection8a() {
    if ( (section8Entry == 'comboLockbox') && (sectionsCompleted == 75) ){ 

        if (section8Combination) { 
            $('#section9').removeClass('sectionHidden');
            $('#section9').addClass('sectionShow');
            $('html, body').animate({
                scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 80;
        }
    }
}
function testSection8b() {
    if ( (section8Entry == 'supraIBox') && (sectionsCompleted == 76) ){ 
        if ($('#cbsCodeSection8Input').val().length == 7) { 
            $('#section9').removeClass('sectionHidden');
            $('#section9').addClass('sectionShow');
            $('html, body').animate({
                scrollTop: ($("#section9").offset().top + $("#section9").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 80;
        }
    }
}

// Section 9
function section9Handle() {
    if (sectionsCompleted > 90){
        $('#section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }    
    $('#otherSection9Input').val('');
    sec9Other = 0;
    $('#otherSection9NormalHover').css('display','block');
    $('#otherSection9Input').css('display','none');
    $('#section10').addClass('sectionShow');
    $('#section10').removeClass('sectionHidden');
    $('html, body').animate({
        scrollTop: ($("#section10").offset().top + $("#section10").height() - 0.70*$(window).height())
    }, 500);
     sectionsCompleted = 90;
}

$('#section9FiveButtons1').click(function(){
    formButtons.resetObjectSection(formButtons.Sec9Butt2);
    formButtons.resetObjectSection(formButtons.Sec9Butt3);
    formButtons.resetObjectSection(formButtons.Sec9Butt4);
    formButtons.resetObjectSection(formButtons.Sec9Butt5);    
    $('#section9FiveButtons2, #section9FiveButtons3, #section9FiveButtons4, #section9FiveButtons5, #otherSection9NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section9Pictures = '15';
    section9Handle();
});
$('#section9FiveButtons2').click(function(){
    formButtons.resetObjectSection(formButtons.Sec9Butt1);
    formButtons.resetObjectSection(formButtons.Sec9Butt3);
    formButtons.resetObjectSection(formButtons.Sec9Butt4);
    formButtons.resetObjectSection(formButtons.Sec9Butt5);     
    $('#section9FiveButtons1, #section9FiveButtons3, #section9FiveButtons4, #section9FiveButtons5, #otherSection9NormalHover').addClass('fadedButton'); 
    $(this).removeClass('fadedButton');
    section9Pictures = '25';
    section9Handle();
});
$('#section9FiveButtons3').click(function(){
    formButtons.resetObjectSection(formButtons.Sec9Butt2);
    formButtons.resetObjectSection(formButtons.Sec9Butt1);
    formButtons.resetObjectSection(formButtons.Sec9Butt4);
    formButtons.resetObjectSection(formButtons.Sec9Butt5);     
    $('#section9FiveButtons1, #section9FiveButtons2, #section9FiveButtons4, #section9FiveButtons5, #otherSection9NormalHover').addClass('fadedButton'); 
    $(this).removeClass('fadedButton');
    section9Pictures = '36';
    section9Handle();
});
$('#section9FiveButtons4').click(function(){
    formButtons.resetObjectSection(formButtons.Sec9Butt2);
    formButtons.resetObjectSection(formButtons.Sec9Butt3);
    formButtons.resetObjectSection(formButtons.Sec9Butt1);
    formButtons.resetObjectSection(formButtons.Sec9Butt5);     
    $('#section9FiveButtons1, #section9FiveButtons2, #section9FiveButtons3, #section9FiveButtons5, #otherSection9NormalHover').addClass('fadedButton'); 
    $(this).removeClass('fadedButton');
    section9Pictures = '50';
    section9Handle();
});
$('#section9FiveButtons5').click(function(){
    formButtons.resetObjectSection(formButtons.Sec9Butt2);
    formButtons.resetObjectSection(formButtons.Sec9Butt3);
    formButtons.resetObjectSection(formButtons.Sec9Butt4);
    formButtons.resetObjectSection(formButtons.Sec9Butt1);     
    $('#section9FiveButtons2, #section9FiveButtons3, #section9FiveButtons4, #section9FiveButtons1, #otherSection9NormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section9Pictures = 'none';
    section9Handle();
});
//other
$('#otherSection9NormalHover').click(function(){
    formButtons.resetObjectSection(formButtons.Sec9Butt1);
    formButtons.resetObjectSection(formButtons.Sec9Butt2);
    formButtons.resetObjectSection(formButtons.Sec9Butt3);
    formButtons.resetObjectSection(formButtons.Sec9Butt4);
    formButtons.resetObjectSection(formButtons.Sec9Butt5);
    $('#section9FiveButtons2, #section9FiveButtons3, #section9FiveButtons4, #section9FiveButtons1, #section9FiveButtons5').addClass('fadedButton'); 
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 90){
        $('#section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section10, #section11a5Aerial, #section11b, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection9();
        resetSelectionInSection10();
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    // $('html, body').animate({
    //     scrollTop: ($("#otherSection9NormalHover").offset().top + $("#otherSection9NormalHover").height() - 0.70*$(window).height())
    // }, 500);
    sec9Other = 1;
    sectionsCompleted = 89;
    $(this).css('display','none');
    $('#otherSection9Input').css('display','block').focus();
});
$('#otherSection9Input').click(function(){
    sectionsCompleted = 89;
    });
function testSection9Other() {
    if  (sectionsCompleted == 89) { 
        section9Pictures = $('#otherSection9Input').val();
        console.log('section9Pictures je: ' + section9Pictures);
        $('#section10').removeClass('sectionHidden');
        $('#section10').addClass('sectionShow');
        if (sectionsCompleted < 90) {            
            $('html, body').animate({
                scrollTop: ($("#section10").offset().top + $("#section10").height() - 0.70*$(window).height())
            }, 500);            
        }
        sectionsCompleted = 90;     
    }
}

// Section 10
$('#yesDroneMain').click(function(){
    formButtons.resetObjectSection(formButtons.Sec10Butt2);
    $('#noDroneMain').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted > 100){
        $('#section11a5Aerial, #section11b, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section11a5Aerial, #section11b, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#section11').addClass('sectionShow');
    $('#section11').removeClass('sectionHidden');
    $('#textBoxAboutPhotos_Videos').addClass('sectionHidden');
    $('#textBoxAboutPhotos_Videos').removeClass('sectionShow');
    $('html, body').animate({
        scrollTop: ($("#section11").offset().top + $("#section11").height() - 0.70*$(window).height())
    }, 500);
    section10Drone = 'yes';
    sectionsCompleted = 100;
    // HIDE ALL NEXT Sections ???
});
$('#noDroneMain').click(function(){
    formButtons.resetObjectSection(formButtons.Sec10Butt1);
    $('#yesDroneMain').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    if (sectionsCompleted >= 100){
        $('#section11a5Aerial, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section11a5Aerial, #section11, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection11();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#section11b, #section12').addClass('sectionShow');
    $('#section11b, #section12').removeClass('sectionHidden');
    $('#firstVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-None-blue-booking.jpg");
    $('#firstVideoHdsection10 a').attr('href' , '#');
    $('#firstVideoHdsection10 a').removeAttr('href');
    $('#secondVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Walkthrough-blue-booking.jpg");
    $('#secondVideoHdsection10 a').attr('href' , 'https://vimeo.com/176641693?autoplay=1');
    $('#thirdVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Cinematic-blue-booking.jpg");
    $('#thirdVideoHdsection10 a').attr('href' , 'https://vimeo.com/176632896?autoplay=1');
    $('html, body').animate({
        scrollTop: ($("#section12").offset().top + $("#section12").height() - 0.70*$(window).height())
    }, 500);
    section10Drone = 'no';
    sectionsCompleted = 110;
});

// Section 11
function section11Handle() {
    if (sectionsCompleted > 100){
        $('#section11a5Aerial, #section11b, #section12, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section11a5Aerial, #section11b, #section12, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection11b();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#textBoxAboutPhotos_Videos').addClass('sectionShow');
    $('#textBoxAboutPhotos_Videos').removeClass('sectionHidden');
    if (section11FocusOn) {
            if(section11PhotoOrVideo == 'videoOnly'){
                $('#section11b, #section13').addClass('sectionShow');
                $('#section11b, #section13').removeClass('sectionHidden');
                $('#firstVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Aerial-blue-booking.jpg");
                $('#firstVideoHdsection10 a').attr('href' , 'https://youtu.be/is8OW0AQtqk?autoplay=1');
    
                $('#secondVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Aerial-Walkthrough-blue-booking.jpg");
                $('#secondVideoHdsection10 a').attr('href' , 'https://vimeo.com/176641693?autoplay=1');
                $('#thirdVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Aerial-Cinematic-blue-booking.jpg");
                $('#thirdVideoHdsection10 a').attr('href' , 'https://vimeo.com/176632896?autoplay=1');
                $('html, body').animate({
                    scrollTop: ($("#section13").offset().top + $("#section13").height() - 0.70*$(window).height())
                }, 500);
                sectionsCompleted = 120;
            }else{
                $('#section11a5Aerial').addClass('sectionShow');
                $('#section11a5Aerial').removeClass('sectionHidden');
                $('html, body').animate({
                    scrollTop: ($("#section11a5Aerial").offset().top + $("#section11a5Aerial").height() - 0.70*$(window).height())
                }, 500);
                sectionsCompleted = 102;
            }
        
    }else{
        $('html, body').animate({
            scrollTop: ($("#textBoxAboutPhotos_Videos").offset().top + $("#textBoxAboutPhotos_Videos").height() - 0.70*$(window).height())
        }, 500);
        sectionsCompleted = 101;
    }    
}
$('#photosOnlyButtonSection11').click(function(){   
    formButtons.resetObjectSection(formButtons.Sec11Butt2);
    formButtons.resetObjectSection(formButtons.Sec11Butt3); 
    $('#photosAndVideoButtonSection11, #videoOnlyButtonSection11').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section11PhotoOrVideo = 'photoOnly';
    section11Handle();
});
$('#photosAndVideoButtonSection11').click(function(){ 
    formButtons.resetObjectSection(formButtons.Sec11Butt1);
    formButtons.resetObjectSection(formButtons.Sec11Butt3);  
    $('#photosOnlyButtonSection11, #videoOnlyButtonSection11').addClass('fadedButton');
    $(this).removeClass('fadedButton'); 
    section11PhotoOrVideo = 'photoAndVideo';
    section11Handle();
});
$('#videoOnlyButtonSection11').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec11Butt2);
    formButtons.resetObjectSection(formButtons.Sec11Butt1);
    $('#photosOnlyButtonSection11, #photosAndVideoButtonSection11').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section11PhotoOrVideo = 'videoOnly';
    section11Handle();
});

// Section 11 second part

function testSection11Second() {
    if ( (section11PhotoOrVideo) && (sectionsCompleted == 101) && (section11FocusOn) ){
        if(section11PhotoOrVideo == 'videoOnly'){
            $('#section11b, #section13').addClass('sectionShow');
            $('#section11b, #section13').removeClass('sectionHidden');
            $('html, body').animate({
                scrollTop: ($("#section13").offset().top + $("#section13").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 120;
        }else{
            $('#section11a5Aerial').addClass('sectionShow');
            $('#section11a5Aerial').removeClass('sectionHidden');
            $('html, body').animate({
                scrollTop: ($("#section11a5Aerial").offset().top + $("#section11a5Aerial").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 102;
        }
    }
}

// Section 11a5Aerial 

function section11a5AerialHandle() {
    if (sectionsCompleted > 110){
        $('#section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#otherSection11aInput').val('');
    sec115Other = 0;
     $('#otherSection11aNormalHover').css('display','block');
    $('#otherSection11aInput').css('display','none');
    if (section11PhotoOrVideo == 'photoOnly') {
        $('#section11b, #section12').addClass('sectionShow');
        $('#section11b, #section12').removeClass('sectionHidden');
        $('#firstVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-None-blue-booking.jpg");
        $('#firstVideoHdsection10 a').attr('href' , '#');
        $('#firstVideoHdsection10 a').removeAttr('href');
        $('#secondVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Walkthrough-blue-booking.jpg");
        $('#secondVideoHdsection10 a').attr('href' , 'https://vimeo.com/176641693?autoplay=1');
        $('#thirdVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Cinematic-blue-booking.jpg");
        $('#thirdVideoHdsection10 a').attr('href' , 'https://vimeo.com/176632896?autoplay=1');        
        $('html, body').animate({
            scrollTop: ($("#section12").offset().top + $("#section12").height() - 0.70*$(window).height())
        }, 500);
    }else {
        $('#section11b, #section13').addClass('sectionShow');
        $('#section11b, #section13').removeClass('sectionHidden');
        $('#firstVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Aerial-blue-booking.jpg");
        $('#firstVideoHdsection10 a').attr('href' , 'https://youtu.be/is8OW0AQtqk?autoplay=1');
        $('#secondVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Aerial-Walkthrough-blue-booking.jpg");
        $('#secondVideoHdsection10 a').attr('href' , 'https://vimeo.com/176641693?autoplay=1');
        $('#thirdVideoHdsection10 img').attr('src', "https://ikactest.000webhostapp.com/images/HD-Video-Example-Images-Aerial-Cinematic-blue-booking.jpg");
        $('#thirdVideoHdsection10 a').attr('href' , 'https://vimeo.com/176632896?autoplay=1');
        $('html, body').animate({
            scrollTop: ($("#section13").offset().top + $("#section13").height() - 0.70*$(window).height())
        }, 500);
    }
    sectionsCompleted = 110;
}
$('#section11aFiveButtons1').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec115Butt2);
    formButtons.resetObjectSection(formButtons.Sec115Butt3);
    formButtons.resetObjectSection(formButtons.Sec115Butt4);
    formButtons.resetObjectSection(formButtons.Sec115Butt5);
    $('#section11aFiveButtons2, #section11aFiveButtons3, #section11aFiveButtons4, #section11aFiveButtons5, #otherSection11aNormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section11a5AerialDronePhotos = '1';
    section11a5AerialHandle();
});
$('#section11aFiveButtons2').click(function(){   
    formButtons.resetObjectSection(formButtons.Sec115Butt1);
    formButtons.resetObjectSection(formButtons.Sec115Butt3);
    formButtons.resetObjectSection(formButtons.Sec115Butt4);
    formButtons.resetObjectSection(formButtons.Sec115Butt5); 
    $('#section11aFiveButtons1, #section11aFiveButtons3, #section11aFiveButtons4, #section11aFiveButtons5, #otherSection11aNormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section11a5AerialDronePhotos = '5';
    section11a5AerialHandle();
});
$('#section11aFiveButtons3').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec115Butt2);
    formButtons.resetObjectSection(formButtons.Sec115Butt1);
    formButtons.resetObjectSection(formButtons.Sec115Butt4);
    formButtons.resetObjectSection(formButtons.Sec115Butt5);
    $('#section11aFiveButtons1, #section11aFiveButtons2, #section11aFiveButtons4, #section11aFiveButtons5, #otherSection11aNormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section11a5AerialDronePhotos = '10';
    section11a5AerialHandle();
});
$('#section11aFiveButtons4').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec115Butt2);
    formButtons.resetObjectSection(formButtons.Sec115Butt3);
    formButtons.resetObjectSection(formButtons.Sec115Butt1);
    formButtons.resetObjectSection(formButtons.Sec115Butt5);
    $('#section11aFiveButtons2, #section11aFiveButtons3, #section11aFiveButtons1, #section11aFiveButtons5, #otherSection11aNormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section11a5AerialDronePhotos = '20';
    section11a5AerialHandle();
});
$('#section11aFiveButtons5').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec115Butt2);
    formButtons.resetObjectSection(formButtons.Sec115Butt3);
    formButtons.resetObjectSection(formButtons.Sec115Butt4);
    formButtons.resetObjectSection(formButtons.Sec115Butt1);
    $('#section11aFiveButtons2, #section11aFiveButtons3, #section11aFiveButtons4, #section11aFiveButtons1, #otherSection11aNormalHover').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section11a5AerialDronePhotos = 'none';
    section11a5AerialHandle();
});
//other
$('#otherSection11aNormalHover').click(function(){
    if (sectionsCompleted >= 110){
        $('#section11b, #section13, #section14, #section15, #section16, #section17, #section18').addClass('sectionHidden');
        $('#section11b, #section13, #section14, #section15, #section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection11b();
        resetSelectionInSection12();
        resetSelectionInSection13();
        resetSelectionInSection15();
        resetForSection15And16();
        $('html, body').animate({
        scrollTop: ($("#otherSection11aNormalHover").offset().top + $("#otherSection11aNormalHover").height() - 0.70*$(window).height())
    }, 500);
    }
    sec115Other = 1;
    sectionsCompleted = 109;
    formButtons.resetObjectSection(formButtons.Sec115Butt1);
    formButtons.resetObjectSection(formButtons.Sec115Butt2);
    formButtons.resetObjectSection(formButtons.Sec115Butt3);
    formButtons.resetObjectSection(formButtons.Sec115Butt4);
    formButtons.resetObjectSection(formButtons.Sec115Butt5);
    $('#section11aFiveButtons2, #section11aFiveButtons3, #section11aFiveButtons4, #section11aFiveButtons5, #section11aFiveButtons1').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    $(this).css('display','none');
    $('#otherSection11aInput').css('display','block').focus();
});
$('#otherSection11aInput').click(function(){
    sectionsCompleted = 109;
    });
function testSection11Other() {
    if  (sectionsCompleted == 109) { 
        section11a5AerialDronePhotos = $('#otherSection11aInput').val();
        console.log('section11a5AerialDronePhotos je: ' + section11a5AerialDronePhotos);
        if (section11PhotoOrVideo == 'photoOnly') {
            $('#section11b, #section12').addClass('sectionShow');
            $('#section11b, #section12').removeClass('sectionHidden');
            if (sectionsCompleted < 110) {            
                $('html, body').animate({
                    scrollTop: ($("#section12").offset().top + $("#section12").height() - 0.70*$(window).height())
                }, 500);           
            } 
        }else {
            $('#section11b, #section13').addClass('sectionShow');
            $('#section11b, #section13').removeClass('sectionHidden');
            if (sectionsCompleted < 110) {            
                $('html, body').animate({
                    scrollTop: ($("#section13").offset().top + $("#section13").height() - 0.70*$(window).height())
                }, 500);           
            } 
        }
        sectionsCompleted = 110;    
    }
}

// dollhouse price
function calcDollHousePrice() {
    section4Sqft = $('#sqftInput').val();
    if (section4Sqft) {section4Sqft = section4Sqft.replace(/sqft/g, '');}
    section4Sqft = section4Sqft.replace(/,/g, '');
    if (section15dollHouse == 'dollNo') {
        $('#dollhiusePriceSection15').text('');
    }else{
        if ( !(isNaN((((((42*(30+((section4Sqft/1000)*35)))/60)+49+((section4Sqft/250)*5)) /section4Sqft))*section4Sqft)) ) {
            $('#dollhiusePriceSection15').text('$' + ((((((42*(30+((section4Sqft/1000)*35)))/60)+49+((section4Sqft/250)*5)) /section4Sqft))*section4Sqft).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) );         
        }else {
            $('#dollhiusePriceSection15').text('N/A');
        }
    }
}

$('#sqftInput').focusout(function() {
    calcDollHousePrice();
    console.log('focOut sqft je: ' + section4Sqft);
});

// section 12

function section12() {
    if (sectionsCompleted > 140){
        $('#section16, #section17, #section18').addClass('sectionHidden');
        $('#section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#section14, #section15').addClass('sectionShow');
    $('#section14, #section15').removeClass('sectionHidden');
    $('html, body').animate({
        scrollTop: ($("#section15").offset().top + $("#section15").height() - 0.70*$(window).height())
    }, 500);
    sectionsCompleted = 140;
}
$('#section12FiveButtons1').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec12Butt2);
    formButtons.resetObjectSection(formButtons.Sec12Butt3);
    $('#section12ThreeButtons2, #section12FiveButtons3').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    HDVideoType = 'aerial';
    section12();
});
$('#section12ThreeButtons2').click(function(){   
    formButtons.resetObjectSection(formButtons.Sec12Butt1);
    formButtons.resetObjectSection(formButtons.Sec12Butt3); 
    $('#section12FiveButtons1, #section12FiveButtons3').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    HDVideoType = 'walkthrough';
    section12();
});
$('#section12FiveButtons3').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec12Butt2);
    formButtons.resetObjectSection(formButtons.Sec12Butt1);
    $('#section12ThreeButtons2, #section12FiveButtons1').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    HDVideoType = 'cinematic';
    section12();
});

// section 13

function section13() {
    if (sectionsCompleted > 140){
        $('#section16, #section17, #section18').addClass('sectionHidden');
        $('#section16, #section17, #section18').removeClass('sectionShow');
        resetSelectionInSection15();
        resetForSection15And16();
    }
    $('#section14, #section15').addClass('sectionShow');
    $('#section14, #section15').removeClass('sectionHidden');
    $('html, body').animate({
        scrollTop: ($("#section15").offset().top + $("#section15").height() - 0.70*$(window).height())
    }, 500);
    sectionsCompleted = 140;
}
$('#section13ThreeButtons1').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec13Butt2);
    formButtons.resetObjectSection(formButtons.Sec13Butt3);
    $('#section13ThreeButtons2, #section13ThreeButtons3').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    HDVideoType = 'aerialOnly';
    section13();
});
$('#section13ThreeButtons2').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec13Butt1);
    formButtons.resetObjectSection(formButtons.Sec13Butt3);
    $('#section13ThreeButtons1, #section13ThreeButtons3').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    HDVideoType = 'walkthroughPlusAerial';
    section13();
});
$('#section13ThreeButtons3').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec13Butt2);
    formButtons.resetObjectSection(formButtons.Sec13Butt1);
    $('#section13ThreeButtons2, #section13ThreeButtons1').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    HDVideoType = 'cinematicPlusAerial';
    section13();
});

// section 15

function section15() {
    $('#section16, #section17').addClass('sectionShow');
    $('#section16, #section17').removeClass('sectionHidden');
    // if there are no pictures go and hide pic (left) part in section17
    if ( (section9Pictures == 'none') && ( (section10Drone == 'no') || (section11PhotoOrVideo == 'videoOnly') || (section11a5AerialDronePhotos == 'none') ) ) {
        $('#leftSection17ButtonsGroup').addClass('sectionHidden');
        $('#leftSection17ButtonsGroup').removeClass('sectionShow');
        // $('#rightSection17ButtonsGroup').css({
        //                                         'float': 'none',
        //                                         'margin': '50px auto',
        //                                         'margin-top': '0px',
        //                                         'width': '386px'
        //                                     });
        section17Photo='';
    }else{
        $('#leftSection17ButtonsGroup').addClass('sectionShow');
        $('#leftSection17ButtonsGroup').removeClass('sectionHidden');
        // $('#rightSection17ButtonsGroup').css({
        //                                         'float': 'right',
        //                                         'margin': '0px 0px 50px 0px'
        //                                     });
    }
    // if there are no videos go and hide video (right) part in section17
    if ( ( (section10Drone == 'yes') && (section11PhotoOrVideo == 'photoOnly') && (HDVideoType == 'aerial') ) ||  ( (section10Drone == 'no') && (HDVideoType == 'aerial') ) ) {
        $('#rightSection17ButtonsGroup').addClass('sectionHidden');
        $('#rightSection17ButtonsGroup').removeClass('sectionShow');
        // $('#leftSection17ButtonsGroup').css({
        //                                         'float': 'none',
        //                                         'margin': '50px auto',
        //                                         'margin-top': '0px',
        //                                         'width': '386px'
        //                                     });
        section17Video='';
    }else{
        $('#rightSection17ButtonsGroup').addClass('sectionShow');
        $('#rightSection17ButtonsGroup').removeClass('sectionHidden');
        // $('#leftSection17ButtonsGroup').css({
        //                                         'float': 'left',
        //                                         'margin': '0px 0px 50px 0px'
        //                                     });
    }
    if (sectionsCompleted > 150) {
        $('#section18').addClass('sectionHidden');
        $('#section18').removeClass('sectionShow');
        resetForSection15And16();
    }
    $('html, body').animate({
        scrollTop: ($("#section16").offset().top + $("#section16").height() - 0.70*$(window).height())
    }, 500);   
    sectionsCompleted = 150;
}
$('#yesSection15Button').click(function(){    
    formButtons.resetObjectSection(formButtons.Sec15Butt2);
    $('#noSection15Button').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section15dollHouse = 'dollYes';
    calcDollHousePrice();
    section15();
});
$('#noSection15Button').click(function(){   
    $('#dollhiusePriceSection15').text(''); 
    formButtons.resetObjectSection(formButtons.Sec15Butt1);
    $('#yesSection15Button').addClass('fadedButton');
    $(this).removeClass('fadedButton');
    section15dollHouse = 'dollNo';
    section15();
});

// section 16

$('#section16ThreeButtons1').click(function(){
    if (section16Flyer=='yes') {
        section16Flyer = 'no';
        $('#section16ThreeButtons1').addClass('formButtons.Sec16Butt1.inactive');
        $('#section16ThreeButtons1').removeClass('formButtons.Sec16Butt1.active');
    }else{
        section16Flyer = 'yes';
        $('#section16ThreeButtons1').removeClass('formButtons.Sec16Butt1.inactive');
        $('#section16ThreeButtons1').addClass('formButtons.Sec16Butt1.active');
    }    
    sectionsCompleted = 160;
});

$('#section16ThreeButtons2').click(function(){
    if (section16Twilight=='yes') {
        section16Twilight = 'no';
        $('#section16ThreeButtons2').addClass('formButtons.Sec16Butt2.inactive');
        $('#section16ThreeButtons2').removeClass('formButtons.Sec16Butt2.active');
    }else{
        section16Twilight = 'yes';
        $('#section16ThreeButtons2').removeClass('formButtons.Sec16Butt2.inactive');
        $('#section16ThreeButtons2').addClass('formButtons.Sec16Butt2.active');
    }    
    sectionsCompleted = 160;
});

$('#section16ThreeButtons3').click(function(){
    if (section16YouTube=='yes') {
        section16YouTube = 'no';
        $('#section16ThreeButtons3').addClass('formButtons.Sec16Butt3.inactive');
        $('#section16ThreeButtons3').removeClass('formButtons.Sec16Butt3.active');
    }else{
        section16YouTube = 'yes';
        $('#section16ThreeButtons3').removeClass('formButtons.Sec16Butt3.inactive');
        $('#section16ThreeButtons3').addClass('formButtons.Sec16Butt3.active');
    }    
    sectionsCompleted = 160;
});

// section 17

function handleSection18() {
    if ( (section17Photo && section17Video) || (section17Photo && ($('#rightSection17ButtonsGroup').hasClass('sectionHidden')) ) || ( section17Video && ($('#leftSection17ButtonsGroup').hasClass('sectionHidden')) ) ) {
        $('#section18a').addClass('sectionShow');
        $('#section18a').removeClass('sectionHidden');

         if (section4Sqft>4000) {
            extraPriceSqft = true;
         }else{
            extraPriceSqft = false;
         }

        sectionsCompleted = 170;
        $('html, body').animate({
            scrollTop: ($("#section18a").offset().top + $("#section18a").height() - 0.70*$(window).height())
        }, 500);
    }
} 
// left
$('#nextDaySection17ButtonLeft1').click(function(){
    section17Photo = 'nextDay';
    $('#nextDaySection17ButtonLeft1').addClass(formButtons.Sec17Butt1.active);
    $('#nextDaySection17ButtonLeft1').removeClass(formButtons.Sec17Butt1.inactive);
    $('#nextDaySection17ButtonLeft2').addClass(formButtons.Sec17Butt2.inactive);
    $('#nextDaySection17ButtonLeft2').removeClass(formButtons.Sec17Butt2.active);
    $('#nextDaySection17ButtonLeft3').addClass(formButtons.Sec17Butt3.inactive);
    $('#nextDaySection17ButtonLeft3').removeClass(formButtons.Sec17Butt3.active);  
    handleSection18();
});
$('#nextDaySection17ButtonLeft2').click(function(){
    section17Photo = 'sameDay';
    $('#nextDaySection17ButtonLeft2').addClass(formButtons.Sec17Butt2.active);
    $('#nextDaySection17ButtonLeft2').removeClass(formButtons.Sec17Butt2.inactive);
    $('#nextDaySection17ButtonLeft1').addClass(formButtons.Sec17Butt1.inactive);
    $('#nextDaySection17ButtonLeft1').removeClass(formButtons.Sec17Butt1.active);
    $('#nextDaySection17ButtonLeft3').addClass(formButtons.Sec17Butt3.inactive);
    $('#nextDaySection17ButtonLeft3').removeClass(formButtons.Sec17Butt3.active);    
    handleSection18();
});
$('#nextDaySection17ButtonLeft3').click(function(){
    section17Photo = 'fourHours';
    $('#nextDaySection17ButtonLeft3').addClass(formButtons.Sec17Butt3.active);
    $('#nextDaySection17ButtonLeft3').removeClass(formButtons.Sec17Butt3.inactive);
    $('#nextDaySection17ButtonLeft2').addClass(formButtons.Sec17Butt2.inactive);
    $('#nextDaySection17ButtonLeft2').removeClass(formButtons.Sec17Butt2.active);
    $('#nextDaySection17ButtonLeft1').addClass(formButtons.Sec17Butt1.inactive);
    $('#nextDaySection17ButtonLeft1').removeClass(formButtons.Sec17Butt1.active);    
    handleSection18();
});   
//right
$('#nextDaySection17ButtonRight1').click(function(){
    section17Video = 'twoBusDays';
    $('#nextDaySection17ButtonRight1').addClass(formButtons.Sec172Butt1.active);
    $('#nextDaySection17ButtonRight1').removeClass(formButtons.Sec172Butt1.inactive);
    $('#nextDaySection17ButtonRight2').addClass(formButtons.Sec172Butt2.inactive);
    $('#nextDaySection17ButtonRight2').removeClass(formButtons.Sec172Butt2.active);
    $('#nextDaySection17ButtonRight3').addClass(formButtons.Sec172Butt3.inactive);
    $('#nextDaySection17ButtonRight3').removeClass(formButtons.Sec172Butt3.active);    
    handleSection18();
});
$('#nextDaySection17ButtonRight2').click(function(){
    section17Video = 'nextBusDay9h';
    $('#nextDaySection17ButtonRight2').addClass(formButtons.Sec172Butt2.active);
    $('#nextDaySection17ButtonRight2').removeClass(formButtons.Sec172Butt2.inactive);
    $('#nextDaySection17ButtonRight1').addClass(formButtons.Sec172Butt1.inactive);
    $('#nextDaySection17ButtonRight1').removeClass(formButtons.Sec172Butt1.active);
    $('#nextDaySection17ButtonRight3').addClass(formButtons.Sec172Butt3.inactive);
    $('#nextDaySection17ButtonRight3').removeClass(formButtons.Sec172Butt3.active);    
    handleSection18();
});
$('#nextDaySection17ButtonRight3').click(function(){
    section17Video = 'nextBusDay12h';
    $('#nextDaySection17ButtonRight3').addClass(formButtons.Sec172Butt3.active);
    $('#nextDaySection17ButtonRight3').removeClass(formButtons.Sec172Butt3.inactive);
    $('#nextDaySection17ButtonRight2').addClass(formButtons.Sec172Butt2.inactive);
    $('#nextDaySection17ButtonRight2').removeClass(formButtons.Sec172Butt2.active);
    $('#nextDaySection17ButtonRight1').addClass(formButtons.Sec172Butt1.inactive);
    $('#nextDaySection17ButtonRight1').removeClass(formButtons.Sec172Butt1.active);    
    handleSection18();
});

// Section 18a

$('#googleButton').click(function(){
    
    if (sectionsCompleted >= 175){
        $('#referralForm').addClass('sectionHidden');
        $('#referralForm').removeClass('sectionShow');
    }
    $('#otherSection18aInput').val('');
    sec18Other = 0;
    $('#otherSection18aNormalHover').css('display','block');
    $('#otherSection18aInput').css('display','none');
    formButtons.resetObjectSection(formButtons.Sec18Butt2);
    $('#section18').removeClass('sectionHidden');
    $('#section18').addClass('sectionShow');
    $('html, body').animate({
        scrollTop: ($("#section18").offset().top + $("#section18").height() - 0.70*$(window).height())
    }, 500);
    section18HearOfUs = 'google';
    sectionsCompleted = 180;
});

$('#referralButton').click(function(){
    $('#otherSection18aInput').val('');
    sec18Other = 0;
    $('#otherSection18aNormalHover').css('display','block');
    $('#otherSection18aInput').css('display','none');
    formButtons.resetObjectSection(formButtons.Sec18Butt1);
    $('#referralForm').removeClass('sectionHidden');
    $('#referralForm').addClass('sectionShow');
    // $('html, body').animate({
    //     scrollTop: ($("#referralForm").offset().top + $("#referralForm").height() - 0.70*$(window).height())
    // }, 500);
    section18HearOfUs = 'referral';
    sectionsCompleted = 175;
});

//other   
$('#otherSection18aNormalHover').click(function(){
    if (sectionsCompleted >= 175){
        $('#referralForm').addClass('sectionHidden');
        $('#referralForm').removeClass('sectionShow');
        $('html, body').animate({
        scrollTop: ($("#otherSection18aNormalHover").offset().top + $("#otherSection18aNormalHover").height() - 0.70*$(window).height())
    }, 500);
    }
    section18HearOfUs = '';
    sec18Other = 1;
    sectionsCompleted = 175;
    formButtons.resetObjectSection(formButtons.Sec18Butt1);
    formButtons.resetObjectSection(formButtons.Sec18Butt2);
    $(this).css('display','none');
    $('#otherSection18aInput').css('display','block').focus();
});
$('#otherSection18aInput').click(function(){
    sectionsCompleted = 175;
    });
function testSection18Other() {
    if  ( (sectionsCompleted == 175) && (sec18Other == 1) ) { 
        section18HearOfUs = $('#otherSection18aInput').val();
        console.log('section18HearOfUs je: ' + section18HearOfUs);
        $('#section18').removeClass('sectionHidden');
        $('#section18').addClass('sectionShow');       
            $('html, body').animate({
                scrollTop: ($("#section18").offset().top + $("#section18").height() - 0.70*$(window).height())
            }, 500);
        sectionsCompleted = 180;       
    }
}
function testSection18a() {
    if ( (section18HearOfUs == 'referral') && (sectionsCompleted == 175) ){
        console.log(section18NFirstName);
        console.log(section18NLastName);
        if ( section18NFirstName && section18NLastName) {
            $('#section18').removeClass('sectionHidden');
            $('#section18').addClass('sectionShow');
            $('html, body').animate({
                scrollTop: ($("#section18").offset().top + $("#section18").height() - 0.70*$(window).height())
            }, 500);
            sectionsCompleted = 180;
        }
    }
}


$('#specificButton').click(function() {
    var dateWrapper = $('.picker__box').height();
    console.log(screenHeight);
    console.log(dateWrapper);
    $('.picker__frame').css('top', (screenHeight - (dateWrapper )) / 2);
});  

var timer, timerEmailCheck;
function Start() {
    $('#mainWrapperHomeSnappers input, #textBoxSmall textarea, #textBoxSmallAdditionalNotes textarea').keyup(function () {
        clearTimeout(timer);
        timer = setTimeout(SendRequest, 500);
        clearTimeout(timerEmailCheck);
        timerEmailCheck = setTimeout(SendRequestEmailCheck, 2500);
    });
    $('#dateSpecificInput input').change(function () {
        clearTimeout(timer);
        timer = setTimeout(SendRequest, 500);
    });

}

// input tests and enhancements

//  USA phone number validate 
var patt = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
var pattPhoneYour, pattPhoneAgent, pattPhoneHomeowner;

function testPhoneNumbers() {
    if(section3YourPhone) {
        pattPhoneYour = patt.test(section3YourPhone);        
    }
    if(section3AgentPhone) {
        pattPhoneAgent = patt.test(section3AgentPhone);       
    }
    if(section4YNPhone) {
        pattPhoneHomeowner = patt.test(section4YNPhone);       
    }
}

function testPhoneNumbersRedBorder() {
    section3YourPhone = $('#phoneName').val();
    section3AgentPhone = $('#agentsPhoneName').val();
    section4YNPhone = $('#phoneHomeowner').val();
    if(section3YourPhone) {
        pattPhoneYour = patt.test(section3YourPhone);        
        if(pattPhoneYour) {
            $('#phoneName').removeClass('invalidPhoneNumber');
        }else{
            $('#phoneName').addClass('invalidPhoneNumber');
        }
    }
    if(section3AgentPhone) {
        pattPhoneAgent = patt.test(section3AgentPhone);        
        if(pattPhoneAgent) {
            $('#agentsPhoneName').removeClass('invalidPhoneNumber');
        }else{
            $('#agentsPhoneName').addClass('invalidPhoneNumber');
        }
    }
    if(section4YNPhone) {
        pattPhoneHomeowner = patt.test(section4YNPhone);       
        if(pattPhoneHomeowner) {
            $('#phoneHomeowner').removeClass('invalidPhoneNumber');
        }else{
            $('#phoneHomeowner').addClass('invalidPhoneNumber');
        }
    }
}

//  email validate 
var pattEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var pattEmailYour, pattEmailAgent;

function testEmailInputs() {
    if(section3YourEmail) {
        pattEmailYour = pattEmail.test(section3YourEmail);        
    }
    if(section3AgentEmail) {
        pattEmailAgent = pattEmail.test(section3AgentEmail);        
    }
}
function testEmailInputsRedBorder() {
    section3YourEmail = $('#emailName').val();
    section3AgentEmail = $('#agentsEmailName').val();
    if(section3YourEmail) {
        pattEmailYour = pattEmail.test(section3YourEmail);        
        if(pattEmailYour) {
            $('#emailName').removeClass('invalidPhoneNumber');
        }else{
            $('#emailName').addClass('invalidPhoneNumber');
        }
    }
    if(section3AgentEmail) {
        pattEmailAgent = pattEmail.test(section3AgentEmail);        
        if(pattEmailAgent) {
            $('#agentsEmailName').removeClass('invalidPhoneNumber');
        }else{
            $('#agentsEmailName').addClass('invalidPhoneNumber');
        }
    }
}

function testZipCode5Chars() {
    if( $('#zipCodeAddress').val().length > 0 ) {
        if( $('#zipCodeAddress').val().length == 5 ) {
            $('#zipCodeAddress').removeClass('invalidPhoneNumber');
        }else{
            $('#zipCodeAddress').addClass('invalidPhoneNumber');
        }    
    }
}
$('#zipCodeAddress').focusout(function() {
    testZipCode5Chars();
});

// count CBS characters
// function countCBSChars() {
//     if(section8CBS){
//         $('#supraBoxCbsCodeSection8 > h6').text($('#cbsCodeSection8Input').val().length + ' of 7 digits');
//     }else{
//         $('#supraBoxCbsCodeSection8 > h6').text('0 of 7 digits');
//     }
// }

function confirmEmailTests() {
    if( $('#confirmName').val().length > 0 ) {
        if ( section3YourEmail == $('#confirmName').val() ) {
            $('#confirmName').removeClass('invalidEmailConfirm');
        }else{
            $('#confirmName').addClass('invalidEmailConfirm');
        }
    }
    if( $('#agentsConfirmName').val().length > 0 ) {
        if ( section3AgentEmail == $('#agentsConfirmName').val() ) {
            $('#agentsConfirmName').removeClass('invalidEmailConfirm');
        }else{
            $('#agentsConfirmName').addClass('invalidEmailConfirm');
        }
    }
}
$('#confirmName').focusout(function() {
    confirmEmailTests();
});
$('#agentsConfirmName').focusout(function() {
    confirmEmailTests();
});

// E-mail Typos fixing suggestions
// var sugForYOUREmailCorrection, sugForAGENTEmailCorrection, sugForOWNEREmailCorrection;
// function emailInputCorrection() {
    // $('#emailName').focusout(function() {
    //     testEmailInputsRedBorder();
    //     Mailcheck.run({
    //       email: $('#emailName').val(),
    //       suggested: function(suggestion) {
    //         sugForYOUREmailCorrection = suggestion.full;
    //       },
    //       empty: function() {
    //         sugForYOUREmailCorrection = '';
    //       }
    //     });
    //     if(sugForYOUREmailCorrection) {
    //         $('#pForSuggYourInput').text(sugForYOUREmailCorrection);
    //         $('#testEmailCorrcetion').addClass('sectionShow');
    //         $('#testEmailCorrcetion').removeClass('sectionHidden');
    //     }else {
    //         $('#testEmailCorrcetion').addClass('sectionHidden');
    //         $('#testEmailCorrcetion').removeClass('sectionShow');
    //     }
    //     console.log('izgubio focus i sug je: ' + sugForYOUREmailCorrection);
    // });
    // $('#yesYourSuggInput').click(function(){
    //     $('#testEmailCorrcetion').addClass('sectionHidden');
    //     $('#testEmailCorrcetion').removeClass('sectionShow');
    //     $('#emailName').val(sugForYOUREmailCorrection);
    //     $('#confirmName').focus();
    //     sugForYOUREmailCorrection = '';
    // });
    // $('#noYourSuggInput').click(function(){
    //     $('#testEmailCorrcetion').addClass('sectionHidden');
    //     $('#testEmailCorrcetion').removeClass('sectionShow');
    //     $('#confirmName').focus();
    // });

    //AGENTs
    // $('#agentsEmailName').focusout(function() {
    //     testEmailInputsRedBorder();
    //     Mailcheck.run({
    //       email: $('#agentsEmailName').val(),
    //       suggested: function(suggestion) {
    //         sugForAGENTEmailCorrection = suggestion.full;
    //       },
    //       empty: function() {
    //         sugForAGENTEmailCorrection = '';
    //       }
    //     });
    //     if(sugForAGENTEmailCorrection) {
    //         $('#pForSuggAgentsInput').text(sugForAGENTEmailCorrection);
    //         $('#testAgentsEmailCorrcetion').addClass('sectionShow');
    //         $('#testAgentsEmailCorrcetion').removeClass('sectionHidden');
    //     }else {
    //         $('#testAgentsEmailCorrcetion').addClass('sectionHidden');
    //         $('#testAgentsEmailCorrcetion').removeClass('sectionShow');
    //     }
    //     console.log('izgubio focus i sug je: ' + sugForAGENTEmailCorrection);
    // });
    // $('#yesAgentsSuggInput').click(function(){
    //     $('#testAgentsEmailCorrcetion').addClass('sectionHidden');
    //     $('#testAgentsEmailCorrcetion').removeClass('sectionShow');
    //     $('#agentsEmailName').val(sugForAGENTEmailCorrection);
    //     $('#agentsConfirmName').focus();
    //     sugForAGENTEmailCorrection = '';
    // });
    // $('#noAgentsSuggInput').click(function(){
    //     $('#testAgentsEmailCorrcetion').addClass('sectionHidden');
    //     $('#testAgentsEmailCorrcetion').removeClass('sectionShow');
    //     $('#agentsConfirmName').focus();
    // });

    //Home Owner
    // $('#emailHomeowner').focusout(function() {
    //     Mailcheck.run({
    //       email: $('#emailHomeowner').val(),
    //       suggested: function(suggestion) {
    //         sugForOWNEREmailCorrection = suggestion.full;
    //       },
    //       empty: function() {
    //         sugForOWNEREmailCorrection = '';
    //       }
    //     });
    //     if(sugForOWNEREmailCorrection) {
    //         $('#pForSuggHomeOwnInput').text(sugForOWNEREmailCorrection);
    //         $('#homeOwnEmailSugg').addClass('sectionShow');
    //         $('#homeOwnEmailSugg').removeClass('sectionHidden');
    //     }else {
    //         $('#homeOwnEmailSugg').addClass('sectionHidden');
    //         $('#homeOwnEmailSugg').removeClass('sectionShow');
    //     }
    //     console.log('izgubio focus i sug je: ' + sugForOWNEREmailCorrection);
    // });
    // $('#yesHomeOwnSuggInput').click(function(){
    //     $('#homeOwnEmailSugg').addClass('sectionHidden');
    //     $('#homeOwnEmailSugg').removeClass('sectionShow');
    //     $('#emailHomeowner').val(sugForOWNEREmailCorrection);
    //     sugForOWNEREmailCorrection = '';
    // });
    // $('#noHomeOwnSuggInput').click(function(){
    //     $('#homeOwnEmailSugg').addClass('sectionHidden');
    //     $('#homeOwnEmailSugg').removeClass('sectionShow');
    // });
// }

// input legths, character acceptings and rest
function inputsLimitations() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {dd = '0'+dd} 

    if(mm<10) {mm = '0'+mm} 

    today = yyyy + ',' + mm + ',' + dd;
    $('#dateSpecificInput input').pickadate({
      min: today,
      format: 'dddd, mm/dd'
    })
    
    $("#cbsCodeSection8Input").keydown(function (e) {
        console.log($('#cbsCodeSection8Input').val().length);
        //Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
            // Allow: Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || ($('#cbsCodeSection8Input').val().length >= 7) ) {
            e.preventDefault();
        }
    });
    $('#cbsCodeSection8Input').keypress(function() {
        if (this.value.length >= 7) {
            return false;
        }
    });
    $('#cbsCodeSection8Input').keyup(function() {
        $('#supraBoxCbsCodeSection8 > h6').text($('#cbsCodeSection8Input').val().length + ' of 7 digits');
    });

    $("#phoneName, #agentsPhoneName, #phoneHomeowner").keydown(function (e) {
        //Allow: backspace, delete, tab, escape, enter, minus, decimal, dot, dash
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 109, 110, 190, 189 ]) !== -1 ||
             // Allow: )
            (e.keyCode == 48 && e.shiftKey === true) || 
            // Allow: (
            (e.keyCode == 57 && e.shiftKey === true) || 
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
            // Allow: Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || ($('#cbsCodeSection8Input').val().length >= 7) ) {
            e.preventDefault();
        }
    });
    $('#phoneName, #agentsPhoneName, #phoneHomeowner').focusout(function() {
        testPhoneNumbersRedBorder();
        if (patt.test($(this).val())) {
            var phoneFormatted;
            phoneFormatted = $(this).val();
            phoneFormatted = phoneFormatted.replace(/\D/g,'');
            phoneFormatted = '(' + phoneFormatted.substring(0, 3) + ') ' + phoneFormatted.substring(3, 6) + '-' + phoneFormatted.substring(6, 10);
            $(this).val(phoneFormatted);
        }
    })

    $("#zipCodeAddress").keydown(function (e) {
        //Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13 ]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
            // Allow: Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || ($('#zipCodeAddress').val().length >= 5) ) {
            e.preventDefault();
        }
    });

    
    $("#listPrice").keydown(function (e) {
        //Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13 ]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
            // Allow: Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is  a number and stop the keypress
        if ( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) ) {
            e.preventDefault();
        }
    });

    $("#sqftInput").keydown(function (e) {
        //Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13 ]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
            // Allow: Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is  a number and stop the keypress
        if ( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) ) {
            e.preventDefault();
        }

    });

    $("#cityAddress").keydown(function (e) {
        //Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13 ]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
            // Allow: Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is not a number and stop the keypress
        if ( (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 111) || (e.keyCode >= 186 && e.keyCode <= 192) || (e.keyCode >= 219 && e.keyCode <= 222) ) {
            e.preventDefault();
        }
    });
}

// Pricing
// function pricingHandler() {
//     var sumValue = 0;
//     console.log('section11a5AerialDronePhotos is: ' + section11a5AerialDronePhotos);
//             console.log('parse is: ' + parseInt(section11a5AerialDronePhotos));
//     if( (section9Pictures && (section9Pictures != 'none') ) || section11a5AerialDronePhotos || (HDVideoType && (HDVideoType!='aerial')) || (section15dollHouse && (section15dollHouse!='dollNo')) || (section16Flyer=='yes') || (section16Twilight=='yes') || (section16YouTube=='yes') || (section17Photo && (section17Photo!='nextDay') ) || (section17Video && (section17Video!='twoBusDays') )) {
//         $('#pricingWrapper').addClass('sectionShow');
//         $('#pricingWrapper').removeClass('sectionHidden');

//         // Watch if there is a 'none' input!
//         if(section9Pictures && (section9Pictures != 'none')) {
            
//             var interiorPhotoValue = 0;
//             switch (section9Pictures) {
//                 case '15':
//                     interiorPhotoValue = 79;
//                     break; 
//                 case '25':
//                     interiorPhotoValue = 99;
//                     break; 
//                 case '36':
//                     interiorPhotoValue = 125;
//                     break;
//                 case '50':
//                     interiorPhotoValue = 149;
//                     break;
//                 case 'none':
//                     interiorPhotoValue = 0;
//                     break;
//                 default: 
//                     if(parseInt(section9Pictures) > 0) {
//                         interiorPhotoValue = parseInt(section9Pictures);
//                     }                    
//             }
//             $('#intExtPhotoPriceLine').addClass('sectionShow');
//             $('#intExtPhotoPriceLine').removeClass('sectionHidden');
//             $('#intExtPhotoPriceLine > span').text(interiorPhotoValue);
//             sumValue += interiorPhotoValue;
//         }else{
//             $('#intExtPhotoPriceLine').removeClass('sectionShow');
//             $('#intExtPhotoPriceLine').addClass('sectionHidden');
//         }

//         // Watch if there is a 'none' input!
//         if(section11a5AerialDronePhotos) {
            
//             var aerialPhotoValue = 0;
//             switch (section11a5AerialDronePhotos) {
//                 case '1':
//                     aerialPhotoValue = 59;
//                     break; 
//                 case '5':
//                     aerialPhotoValue = 69;
//                     break; 
//                 case '10':
//                     aerialPhotoValue = 79;
//                     break;
//                 case '20':
//                     aerialPhotoValue = 89;
//                     break;
//                 default: 
//                     if(parseInt(section11a5AerialDronePhotos) > 0) {
//                         aerialPhotoValue = parseInt(section11a5AerialDronePhotos);
//                     }                    
//             }
//             $('#dronePhotoPriceLine').addClass('sectionShow');
//             $('#dronePhotoPriceLine').removeClass('sectionHidden');
//             $('#dronePhotoPriceLine > span').text(aerialPhotoValue);
//             sumValue += aerialPhotoValue;
//         }else{
//             $('#dronePhotoPriceLine').removeClass('sectionShow');
//             $('#dronePhotoPriceLine').addClass('sectionHidden');
//         }

//          // Watch if there is a 'none' input!
//         if(HDVideoType && (HDVideoType!='aerial') ) {
//             var HDVideoTypeValue = 0;
//             switch (HDVideoType) {
//                 case 'aerial':
//                     HDVideoTypeValue = 0;
//                     break; 
//                 case 'walkthrough':
//                     HDVideoTypeValue = 175;
//                     break; 
//                 case 'cinematic':
//                     HDVideoTypeValue = 299;
//                     break;
//                 case 'aerialOnly':
//                     HDVideoTypeValue = 49;
//                     break;
//                 case 'walkthroughPlusAerial':
//                     HDVideoTypeValue = 199;
//                     break;
//                 case 'cinematicPlusAerial':
//                     HDVideoTypeValue = 299;
//                     break;        
//                 default: 
//                     HDVideoTypeValue = 0;
//             }
//             $('#walkthroughCinematicPriceLine').addClass('sectionShow');
//             $('#walkthroughCinematicPriceLine').removeClass('sectionHidden');
//             $('#walkthroughCinematicPriceLine > span').text(HDVideoTypeValue);
//             sumValue += HDVideoTypeValue;
//         }else{
//             $('#walkthroughCinematicPriceLine').removeClass('sectionShow');
//             $('#walkthroughCinematicPriceLine').addClass('sectionHidden');
//         }

//         if(section15dollHouse && (section15dollHouse!='dollNo') && ( !(isNaN((((((42*(30+((section4Sqft/1000)*35)))/60)+49+((section4Sqft/250)*5)) /section4Sqft))*section4Sqft)) ) ) {
//             var dollValue = 0;
//             switch (section15dollHouse) {
//                 case 'dollYes':
//                     dollValue = parseInt(((((((42*(30+((section4Sqft/1000)*35)))/60)+49+((section4Sqft/250)*5)) /section4Sqft))*section4Sqft).toFixed(0));
//                     break; 
//                 default: 
//                     dollValue = 0;
//             }
//             $('#dollHousePriceLine').addClass('sectionShow');
//             $('#dollHousePriceLine').removeClass('sectionHidden');
//             $('#dollHousePriceLine > span').text(dollValue);
//             sumValue += dollValue;
//         }else{
//             $('#dollHousePriceLine').removeClass('sectionShow');
//             $('#dollHousePriceLine').addClass('sectionHidden');
//         }

//         if(section16Flyer=='yes') {
//             $('#FlyerPriceLine').addClass('sectionShow');
//             $('#FlyerPriceLine').removeClass('sectionHidden');
//             $('#FlyerPriceLine > span').text('19');
//             sumValue += 19;
//         }else{
//             $('#FlyerPriceLine').removeClass('sectionShow');
//             $('#FlyerPriceLine').addClass('sectionHidden');
//         }

//         if(section16Twilight=='yes') {
//             $('#twillightPriceLine').addClass('sectionShow');
//             $('#twillightPriceLine').removeClass('sectionHidden');
//             $('#twillightPriceLine > span').text('49');
//             sumValue += 49;
//         }else{
//             $('#twillightPriceLine').removeClass('sectionShow');
//             $('#twillightPriceLine').addClass('sectionHidden');
//         }

//         if(section16YouTube=='yes') {
//             $('#youTubePriceLine').addClass('sectionShow');
//             $('#youTubePriceLine').removeClass('sectionHidden');
//             $('#youTubePriceLine > span').text('19');
//             sumValue += 19;
//         }else{
//             $('#youTubePriceLine').removeClass('sectionShow');
//             $('#youTubePriceLine').addClass('sectionHidden');
//         }

//         if(section17Photo && (section17Photo!='nextDay') ) {
//             var section17PhotoValue = 0;
//             switch (section17Photo) {
//                 case 'sameDay':
//                     section17PhotoValue = 25;
//                     break; 
//                 case 'fourHours':
//                     section17PhotoValue = 49;
//                     break;        
//                 default: 
//                     section17PhotoValue = 0;
//             }
//             $('#photoTurnaroundPriceLine').addClass('sectionShow');
//             $('#photoTurnaroundPriceLine').removeClass('sectionHidden');
//             $('#photoTurnaroundPriceLine > span').text(section17PhotoValue);
//             sumValue += section17PhotoValue;
//         }else{
//             $('#photoTurnaroundPriceLine').removeClass('sectionShow');
//             $('#photoTurnaroundPriceLine').addClass('sectionHidden');
//         }

//         if(section17Video && (section17Video!='twoBusDays') ) {
//             var section17VideoValue = 0;
//             switch (section17Video) {
//                 case 'nextBusDay9h':
//                     section17VideoValue = 25;
//                     break; 
//                 case 'nextBusDay12h':
//                     section17VideoValue = 49;
//                     break;        
//                 default: 
//                     section17VideoValue = 0;
//             }
//             $('#videoTurnaroundPriceLine').addClass('sectionShow');
//             $('#videoTurnaroundPriceLine').removeClass('sectionHidden');
//             $('#videoTurnaroundPriceLine > span').text(section17VideoValue);
//             sumValue += section17VideoValue;
//         }else{
//             $('#videoTurnaroundPriceLine').removeClass('sectionShow');
//             $('#videoTurnaroundPriceLine').addClass('sectionHidden');
//         }
//         // adds extra price for 4k+ sqft
//         console.log('extraPriceSqft ' + extraPriceSqft);
//         if ( (section4Sqft>4000) && (extraPriceSqft) ){
//             $('#largeHousePriceLine').addClass('sectionShow');
//             $('#largeHousePriceLine').removeClass('sectionHidden');
//             sumValue += 25;
//         }else{
//             $('#largeHousePriceLine').removeClass('sectionShow');
//             $('#largeHousePriceLine').addClass('sectionHidden');
//         }

//         $('#sumPriceLine > span').text(sumValue);
//     }else{
//         $('#pricingWrapper').removeClass('sectionShow');
//         $('#pricingWrapper').addClass('sectionHidden');
//     }
// }

function SendRequestEmailCheck() {
    testPhoneNumbersRedBorder();
    testEmailInputsRedBorder();
    testZipCode5Chars();
    confirmEmailTests();
}

function SendRequest() {

    section3YourFirstName = $('#firstName').val();
    section3YourLastName = $('#lastName').val();
    section3YourPhone = $('#phoneName').val();
    section3YourEmail = $('#emailName').val();
    section3YourConfirm = $('#confirmName').val();

    section3AgentFirstName = $('#agentsFirstName').val();
    section3AgentLastName = $('#agentsLastName').val();
    section3AgentPhone = $('#agentsPhoneName').val();
    section3AgentEmail = $('#agentsEmailName').val();
    section3AgentConfirm = $('#agentsConfirmName').val();

    section4Address = $('#streetAddress').val();
    section4City = $('#cityAddress').val();
    section4Zip = $('#zipCodeAddress').val();
    section4LastPrice = $('#listPrice').val();
    section4Sqft = $('#sqftInput').val();
    if (section4Sqft) {section4Sqft = section4Sqft.replace(/sqft/g, '');}
    // if (section4Sqft.length>6) {
    //     section4Sqft = section4Sqft.substring(0, section4Sqft.length-7) + section4Sqft.substring(section4Sqft.length-6, section4Sqft.length);
    // }
    // if (section4Sqft.length>9) {
    //     section4Sqft = section4Sqft.substring(0, section4Sqft.length-10) + section4Sqft.substring(section4Sqft.length-9, section4Sqft.length);
    // }
    // if (section4Sqft.length>12) {
    //     section4Sqft = section4Sqft.substring(0, section4Sqft.length-13) + section4Sqft.substring(section4Sqft.length-12, section4Sqft.length);
    // }
    section4Sqft = section4Sqft.replace(/,/g, '');

    section4YNFirstName = $('#firstNameHomeowner').val();
    section4YNLastName = $('#lastNameHomeowner').val();
    section4YNPhone = $('#phoneHomeowner').val();
    // section4YNEmail = $('#emailHomeowner').val();

    section5Date = $('#dateSpecificInput > input').val();

    section8Combination = $('#combinationSection8Input').val();
    section8CBS = $('#cbsCodeSection8Input').val();

    section11FocusOn = $('#textBoxSmall > textarea').val();

    section17AddNotes = $('#textBoxSmallAdditionalNotes > textarea').val();

    section18NFirstName = $('#firstNameReferral').val();
    section18NLastName = $('#lastNameReferral').val();

    // test phone numbers goes before testSections cause it is used in testSections (true/false)
    testPhoneNumbers();
    testEmailInputs();

    // OVDE IFOVI DA NE BI SVAKI PUT SVE TESTIRAO   IFOVI ZA sectionsCompleted
    // USTVARI PRE CITANJA VAL-OVA
    // ALI CEMU TO, nishta ne dobijam time ...
    testSection2Other();
    testSection3();
    testSection4a();
    testSection4b();
    testSection4YesNo();
    testSection5();
    testSection5Other();
    testSection6Other();
    testSection7Other();
    testSection82Other();
    testSection8Other();
    testSection8a();
    testSection8b();
    testSection9Other();
    testSection11Other();
    testSection11Second();
    testSection18Other();
    testSection18a();

    // countCBSChars();
    calcDollHousePrice();
    // pricingHandler();    
    // emailCorrectionSuggestions();
    // noSamePhoneAndEmailForOwnerAndAgent();
}

// TESTING - values from address bar go to input fields and clicks
function testingFillForm() {
    var workedBefore = $('#workedBefore').val();
    if (workedBefore=='yes') {
        $('#yesFirstButton').trigger( "click" );
    }
    if (workedBefore=='no') {
        $('#noFirstButton').trigger( "click" );
    }

    var fillAs = $('#fillAs').val();
    if (fillAs=='agent') {
        $('#agentButton').trigger( "click" );
    }
    if (fillAs=='assistant') {
        $('#assistantButton').trigger( "click" );
    }
    if (fillAs=='homeowner') {
        $('#homeownerButton').trigger( "click" );
    }

    var yourOrAgents = $('#yourOrAgents').val();
    if (yourOrAgents=='mine') {
        $('#mineFirstButton').trigger( "click" );
    }
    if (yourOrAgents=='agents') {
        $('#anAgentsFirstButton').trigger( "click" );
    }

    var propertyOccupied = $('#propertyOccupied').val();
    if (propertyOccupied=='vacant') {
        $('#vacantFirstButton').trigger( "click" );
    }
    if (propertyOccupied=='occupied') {
        $('#occupiedFirstButton').trigger( "click" );
    }

    var contactHomeowner = $('#contactHomeowner').val();
    if (contactHomeowner=='yes') {
        $('#section4YesButton1').trigger( "click" );
    }
    if (contactHomeowner=='no') {
        $('#section4NoButton2').trigger( "click" );
    }

    var whenHomeReady = $('#whenHomeReady').val();
    if (whenHomeReady=='immediately') {
        $('#ImmediButton').trigger( "click" );
    }

    var goASAP = $('#goASAP').val();
    if (goASAP=='goAnytime') {
        $('#goAnyButton').trigger( "click" );
    }
    if (goASAP=='needAppointment') {
        $('#needAppoButton').trigger( "click" );
    }

    var methodOfEntryAnytime = $('#methodOfEntryAnytime').val();
    if (methodOfEntryAnytime=='combo') {
        $('#comboLockButtonSection82').trigger( "click" );
    }
    if (methodOfEntryAnytime=='supra') {
        $('#supraIboxButtonSection82').trigger( "click" );
    }

    var methodOfEntry = $('#methodOfEntry').val();
    if (methodOfEntry=='combo') {
        $('#comboLockButtonSection8').trigger( "click" );
    }
    if (methodOfEntry=='supra') {
        $('#supraIboxButtonSection8').trigger( "click" );
    }
    if (methodOfEntry=='meeting') {
        $('#meetSomeButtonSection8').trigger( "click" );
    }

    var intExtPic = $('#intExtPic').val();
    if (intExtPic=='15') {
        $('#section9FiveButtons1').trigger( "click" );
    }
    if (intExtPic=='25') {
        $('#section9FiveButtons2').trigger( "click" );
    }
    if (intExtPic=='36') {
        $('#section9FiveButtons3').trigger( "click" );
    }
    if (intExtPic=='50') {
        $('#section9FiveButtons4').trigger( "click" );
    }
    if (intExtPic=='none') {
        $('#section9FiveButtons5').trigger( "click" );
    }

    var dronePhotos = $('#dronePhotos').val();
    if (dronePhotos=='yes') {
        $('#yesDroneMain').trigger( "click" );
    }
    if (dronePhotos=='no') {
        $('#noDroneMain').trigger( "click" );
    }

    var aerialPVOrBoth = $('#aerialPVOrBoth').val();
    if (aerialPVOrBoth=='photo') {
        $('#photosOnlyButtonSection11').trigger( "click" );
    }
    if (aerialPVOrBoth=='andvideo') {
        $('#photosAndVideoButtonSection11').trigger( "click" );
    }
    if (aerialPVOrBoth=='video') {
        $('#videoOnlyButtonSection11').trigger( "click" );
    }

    var AerDroPhoto = $('#AerDroPhoto').val();
    if (AerDroPhoto=='1') {
        $('#section11aFiveButtons1').trigger( "click" );
    }
    if (AerDroPhoto=='5') {
        $('#section11aFiveButtons2').trigger( "click" );
    }
    if (AerDroPhoto=='10') {
        $('#section11aFiveButtons3').trigger( "click" );
    }
    if (AerDroPhoto=='20') {
        $('#section11aFiveButtons4').trigger( "click" );
    }
    if (AerDroPhoto=='none') {
        $('#section11aFiveButtons5').trigger( "click" );
    }

    var HDVideoNone = $('#HDVideoNone').val();
    if (HDVideoNone=='none') {
        $('#section12FiveButtons1').trigger( "click" );
    }
    if (HDVideoNone=='walk') {
        $('#section12ThreeButtons2').trigger( "click" );
    }
    if (HDVideoNone=='cinema') {
        $('#section12FiveButtons3').trigger( "click" );
    }

    var HDVideoAerial = $('#HDVideoAerial').val();
    if (HDVideoAerial=='aerial') {
        $('#section13ThreeButtons1').trigger( "click" );
    }
    if (HDVideoAerial=='walk') {
        $('#section13ThreeButtons2').trigger( "click" );
    }
    if (HDVideoAerial=='cinema') {
        $('#section13ThreeButtons3').trigger( "click" );
    }

    var dollHouse = $('#dollHouse').val();
    if (dollHouse=='yes') {
        $('#yesSection15Button').trigger( "click" );
    }
    if (dollHouse=='no') {
        $('#noSection15Button').trigger( "click" );
    }



} // testingFillForm() ends

$(function() {
	// geolocate();
    screenHeight = $(window).height();
    // INPUT MASK FOR TELEPHONE   https://github.com/RobinHerbots/Inputmask
    $('#phoneName').inputmask({"mask": "(999) 999-9999"}); 
    $('#agentsPhoneName').inputmask({"mask": "(999) 999-9999"}); 
    $('#phoneHomeowner').inputmask({"mask": "(999) 999-9999"}); 

    $('#main').addClass('importantRule');

    new AutoNumeric('#sqftInput', { currencySymbol : ' sqft',
                                    modifyValueOnWheel : false,
                                    decimalPlaces : '0',
                                    formatOnPageLoad : false,
                                    currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix });
    new AutoNumeric('#listPrice', { currencySymbol : '$',
                                        modifyValueOnWheel : false,
                                        formatOnPageLoad : false,                                        
                                        decimalPlaces : '0' });
    inputsLimitations();    
    Start();
    // $('#mainWrapperHomeSnappers').click(function() { pricingHandler(); });
    // $('#mainWrapperHomeSnappers').css('padding-bottom', screenHeight/4 );
    // test for multiple IDs
    // $('[id]').each(function(){
    //     var ids = $('[id="'+this.id+'"]');
    //     if(ids.length>1 && ids[0]==this)
    //     console.log('Multiple IDs #'+this.id);
    // });

    // emailInputCorrection();    

    // TESTING - values from address bar go to input fields and clicks
    testingFillForm();

});
$(window).on('load', function(){
    $('html, body').animate({
        scrollTop: ($("#section1").offset().top + $("#section1").height() - 0.70*$(window).height())
    }, 500);
});
// Google Maps
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">    AIzaSyCOSSZVlh6-Af3e08urkHq7J7tKpbUNhSs

// var placeSearch, autocomplete, place;
var geocoder = new google.maps.Geocoder();
var address, addressGmaps, cityGmaps, zipGmaps;
var addressLat, addressLng;
var distanceFromHomeSnappers, durationToHomeSnappers;
function newGMaps() {
    addressGmaps = $("#streetAddress").val();
    cityGmaps = $("#cityAddress").val();
    zipGmaps = $("#zipCodeAddress").val();
    if ( (addressGmaps.length > 0) && (cityGmaps.length > 0) && (zipGmaps.length > 0) ) {
        address = addressGmaps + ', ' + cityGmaps + ', ' + zipGmaps;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK)
          {
            var destinationGmaps = results[0].formatted_address;
            addressLat = results[0]['geometry']['location'].lat();
            addressLng = results[0]['geometry']['location'].lng();
            
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
              {
                origins: ['3150 Commonwealth Dr, Dallas, TX'],
                destinations: [destinationGmaps],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.IMPERIAL
              }, callback);

            function callback(response, status) {
                if ( (status == 'OK') && (response.rows[0].elements[0].status == 'OK') ) {
                    distanceFromHomeSnappers = response.rows[0].elements[0].distance.text;
                    durationToHomeSnappers = response.rows[0].elements[0].duration.text;
                  // console.log('Distance is: ' + response.rows[0].elements[0].distance.text + ' and you will need approx ' + response.rows[0].elements[0].duration.text + ' to drive there');
                  //   $('#invizP1Distance').text(response.rows[0].elements[0].distance.text);
                  //   $('#invizP2TravelTime').text(response.rows[0].elements[0].duration.text);
                  //   $('#invizP3FormattedAdress').text(destinationGmaps);
                }
            }
          }
        });
    }
}
$('#streetAddress, #cityAddress, #zipCodeAddress').focusout(function() {
    newGMaps();
});


var allUserInputs = {};
$('#submitButton').on("click", function(){
	// make JSON for POST

	if ( $('#yesFirstButton').hasClass("sprite-yes-active") ) {
		allUserInputs.workedWithUsBefore01 = true;
	}else if ( $('#noFirstButton').hasClass("sprite-no-active") ) {
		allUserInputs.workedWithUsBefore01 = false;
	}

	//Fill out form as..
	if ( $('#agentButton').hasClass("sprite-2_0_agent-active") ) {
		allUserInputs.fillOutFormAs = 'agent';
	}else if( $('#assistantButton').hasClass("sprite-2_1_assistant-active") ) {
		allUserInputs.fillOutFormAs = 'assistant';
	}else if( $('#homeownerButton').hasClass("sprite-2_2_homeowner-active") ) {
		allUserInputs.fillOutFormAs = 'homeowner';
	}
	//OTHER
	allUserInputs.fillOutFormAsOTHER = $('#otherSection2Input').val();

	//Would you like your info or an agent's info on the virtual tour?
	if ( $('#mineFirstButton').hasClass("sprite-4_0_mine-active") ) {
		allUserInputs.yourInfoOrAgentsInfo = 'mine';
	}else if ( $('#anAgentsFirstButton').hasClass("sprite-4_1_an-agent_s-active") ) {
		allUserInputs.yourInfoOrAgentsInfo = "agent's";
	}

	//The property is..
	if ( $('#vacantFirstButton').hasClass("sprite-11_0_vacant-active") ) {
		allUserInputs.vacantOrOccupied = 'vacant';
	}else if ( $('#occupiedFirstButton').hasClass("sprite-11_1_occupied-active") ) {
		allUserInputs.vacantOrOccupied = 'occupied';
	}

	//Would you like us to contact the homeowner to setup the appointment?
	if ( $('#section4YesButton1').hasClass("sprite-yes-active") ) {
		allUserInputs.contactTheHomeowner = 'YesContactHomeowner';
	}else if ( $('#section4NoButton2').hasClass("sprite-no-active") ) {
		allUserInputs.contactTheHomeowner = "NoContactHomeowner";

	//When will the home be ready to have the photos taken?
	if ( $('#ImmediButton').hasClass("sprite-20_0_immediately-active") ) {
		allUserInputs.whenToTakePhotos = 'takePhotosImmediately';
	}else if( $('#specificButton').hasClass("sprite-20_1_specific-date-active") ) {
		allUserInputs.whenToTakePhotos = 'takePhotosOnSpecificDate';
	}
	//OTHER
	allUserInputs.whenToTakePhotosOTHER = $('#otherSection5Input').val();
	}

	//Do we need an appointment or can we go as soon as possible?
	if ( $('#goAnyButton').hasClass("sprite-goanytime-blue") ) {
		allUserInputs.doWeNeedAppointment = 'appointmentAnytime';
	}else if( $('#needAppoButton').hasClass("sprite-26_1_need-appointment-active") ) {
		allUserInputs.doWeNeedAppointment = 'weNeedAppointment';
	}
	//OTHER
	allUserInputs.doWeNeedAppointmentOTHER = $('#otherSection6Input').val();

	//Do we need an appointment time or can we go anytime on the cpecified date?
	if ( $('#goAnyButtonSection7').hasClass("sprite-goanytime-blue") ) {
		allUserInputs.appointmentOnSpecifiedDate = 'yesAppointmentOnSpecifiedDate';
	}else if( $('#needAppoButtonSection7').hasClass("sprite-26_1_need-appointment-active") ) {
		allUserInputs.appointmentOnSpecifiedDate = 'noAppointmentOnSpecifiedDate';
	}
	//OTHER
	allUserInputs.appointmentOnSpecifiedDateOTHER = $('#otherSection7Input').val();

	//Method of Entry with 2 options
	if ( $('#comboLockButtonSection82').hasClass("sprite-28_0_combo-active") ) {
		allUserInputs.methodOfEntry2Options = 'comboLockbox';
	}else if( $('#supraIboxButtonSection82').hasClass("sprite-28_1_supra-active") ) {
		allUserInputs.methodOfEntry2Options = 'supraIbox';
	}
	//OTHER
	allUserInputs.methodOfEntry2OptionsOTHER = $('#otherSection82Input').val();

	//Method of Entry with 3 options
	if ( $('#comboLockButtonSection8').hasClass("sprite-28_0_combo-active") ) {
		allUserInputs.methodOfEntry3Options = 'comboLockbox';
	}else if( $('#supraIboxButtonSection8').hasClass("sprite-28_1_supra-active") ) {
		allUserInputs.methodOfEntry3Options = 'supraIbox';
	}else if( $('#meetSomeButtonSection8').hasClass("sprite-28_2_meeting-active") ) {
		allUserInputs.methodOfEntry3Options = 'meetingSomeone';
	}	
	//OTHER
	allUserInputs.methodOfEntry3OptionsOTHER = $('#otherSection8Input').val();

	//Interior/Exterior Photos
	if ( $('#section9FiveButtons1').hasClass("sprite-35_0_15photos-active") ) {
		allUserInputs.interiorExteriorPhotos = 'interiorExterior15';
	}else if( $('#section9FiveButtons2').hasClass("sprite-35_1_25photos-active") ) {
		allUserInputs.interiorExteriorPhotos = 'interiorExterior25';
	}else if( $('#section9FiveButtons3').hasClass("sprite-35_2_36photos-active") ) {
		allUserInputs.interiorExteriorPhotos = 'interiorExterior36';
	}else if( $('#section9FiveButtons4').hasClass("sprite-35_3_50photos-active") ) {
		allUserInputs.interiorExteriorPhotos = 'interiorExterior50';
	}else if( $('#section9FiveButtons5').hasClass("sprite-none-active") ) {
		allUserInputs.interiorExteriorPhotos = 'interiorExteriorNone';
	}	
	//OTHER
	allUserInputs.interiorExteriorPhotosOTHER = $('#inputWrapperSection9').val();

	//Would you like drone photos and/or drone video?
	if ( $('#yesDroneMain').hasClass("sprite-37_0_yes-drone-active") ) {
		allUserInputs.dronePhotosAndOrVideos = 'dronePhotosAndOrVideosYes';
	}else if( $('#noDroneMain').hasClass("sprite-37_1_no-drone-active") ) {
		allUserInputs.dronePhotosAndOrVideos = 'dronePhotosAndOrVideosNo';
	}

	//Aerial Photos, Aerial Video, or Both?
	if ( $('#photosOnlyButtonSection11').hasClass("sprite-38_1_photosonly-active") ) {
		allUserInputs.aerialPhotosAndOrVideos = 'aerialPhotosOnly';
	}else if( $('#photosAndVideoButtonSection11').hasClass("sprite-38_2_photosvideo-active") ) {
		allUserInputs.aerialPhotosAndOrVideos = 'aerialPhotosAndVideos';
	}else if( $('#videoOnlyButtonSection11').hasClass("sprite-38_0_video-only-active") ) {
		allUserInputs.aerialPhotosAndOrVideos = 'aerialVideosOnly';
	}

	//Aerial/Drone Photos
	if ( $('#section11aFiveButtons1').hasClass("sprite-40_0_1aerial-active") ) {
		allUserInputs.aerialDronePhotos = 'aerialDrone1';
	}else if( $('#section11aFiveButtons2').hasClass("sprite-40_1_5aerial-active") ) {
		allUserInputs.aerialDronePhotos = 'aerialDrone5';
	}else if( $('#section11aFiveButtons3').hasClass("sprite-40_2_10aerial-active") ) {
		allUserInputs.aerialDronePhotos = 'aerialDrone10';
	}else if( $('#section11aFiveButtons4').hasClass("sprite-40_3_20aerial-active") ) {
		allUserInputs.aerialDronePhotos = 'aerialDrone20';
	}else if( $('#section11aFiveButtons5').hasClass("sprite-none-active") ) {
		allUserInputs.aerialDronePhotos = 'aerialDroneNone';
	}	
	//OTHER
	allUserInputs.aerialDronePhotosOTHER = $('#otherSection11aInput').val();

	//HD Video1
	if ( $('#section12FiveButtons1').hasClass("sprite-none1-active") ) {
		allUserInputs.videoHD1 = 'None';
	}else if( $('#section12ThreeButtons2').hasClass("sprite-walkthrough-video175blue") ) {
		allUserInputs.videoHD1 = 'walkthroughVideo';
	}else if( $('#section12FiveButtons3').hasClass("sprite-cine299blue") ) {
		allUserInputs.videoHD1 = 'cinematicVideo';
	}

	//HD Video2
	if ( $('#section13ThreeButtons1').hasClass("sprite-aerialonly49-active") ) {
		allUserInputs.videoHD2 = 'aerialOnly';
	}else if( $('#section13ThreeButtons2').hasClass("sprite-walkthrough-aerial-199-active") ) {
		allUserInputs.videoHD2 = 'walkthroughAndAerial';
	}else if( $('#section13ThreeButtons3').hasClass("sprite-cinematic-aerial299-active") ) {
		allUserInputs.videoHD2 = 'cinematicAndAerial';
	}

	//Would you like a Dollhouse Virtual Reality Tour? (Price is below)
	if ( $('#yesSection15Button').hasClass("sprite-yes-active") ) {
		allUserInputs.dollHouse = 'dollHouseYes';
	}else if( $('#noSection15Button').hasClass("sprite-no-active") ) {
		allUserInputs.dollHouse = 'dollHouseNo';
	}

	//Additional Premier Offerings
	if ( $('#section16ThreeButtons1').hasClass("sprite-flyer-blue") ) {
		allUserInputs.flyerPremierOfferings = 'flyerPremierOfferings';
	}
	if( $('#section16ThreeButtons2').hasClass("sprite-twilight-blue") ) {
		allUserInputs.twilightPremierOfferings = 'twilightPremierOfferings';
	}
	if( $('#section16ThreeButtons3').hasClass("sprite-youtube-blue") ) {
		allUserInputs.youtubePremierOfferings = 'youtubePremierOfferings';
	}

	//Photo Turnaround
	if ( $('#nextDaySection17ButtonLeft1').hasClass("sprite-next-day-by-12-free-blue") ) {
		allUserInputs.photoTurnaround = 'free';
	}else if( $('#nextDaySection17ButtonLeft2').hasClass("sprite-same-day-by-9-25-blue") ) {
		allUserInputs.photoTurnaround = '25';
	}else if( $('#nextDaySection17ButtonLeft3').hasClass("sprite-4-hours-49-blue") ) {
		allUserInputs.photoTurnaround = '49';
	}

	//Video Turnaround
	if ( $('#nextDaySection17ButtonRight1').hasClass("sprite-2-business-days-by-12-free-blue") ) {
		allUserInputs.videoTurnaround = 'free';
	}else if( $('#nextDaySection17ButtonRight2').hasClass("sprite-next-day-by-9-25-blue") ) {
		allUserInputs.videoTurnaround = '25';
	}else if( $('#nextDaySection17ButtonRight3').hasClass("sprite-next-business-day-by-12-49-blue") ) {
		allUserInputs.videoTurnaround = '49';
	}

	//How did you hear about us?
	if ( $('#googleButton').hasClass("sprite-60_0_google-active") ) {
		allUserInputs.howDidYouHearAboutUs = 'googleSearch';
	}else if( $('#referralButton').hasClass("sprite60 sprite-60_1_referral-active") ) {
		allUserInputs.howDidYouHearAboutUs = 'referral';
	}	
	//OTHER
	allUserInputs.howDidYouHearAboutUsOTHER = $('#otherSection18aInput').val();

	//INPUTS
	$.each( $('#mainWrapperHomeSnappers input') , function(){
		allUserInputs[ this.id ] = $(this).val();
	})
	//TEXTAREAS
	$.each( $('#mainWrapperHomeSnappers textarea') , function(){
		allUserInputs[ this.id ] = $(this).val();
	})
	//geolocation
    allUserInputs.addressLat = addressLat;
    allUserInputs.addressLng = addressLng;
    allUserInputs.distanceFromHomeSnappers = distanceFromHomeSnappers;
    allUserInputs.durationToHomeSnappers = durationToHomeSnappers;

	console.log(allUserInputs);

	$.post('https://apps.homesnappers.com/booking-form/new', allUserInputs, null, 'jsonp').done(function(response) {
		console.log(response);
		if(response) {

		} else {

		}
	});
})


// function geocodeAddress(geocoder, resultsMap) {
//   var address = document.getElementById('address').value;
//   geocoder.geocode({'address': address}, function(results, status) {
//     if (status === 'OK') {
//       resultsMap.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }


// function initAutocomplete() {
// Create the autocomplete object, restricting the search to geographical
// location types.
// autocomplete = new google.maps.places.Autocomplete(
//     * @type {!HTMLInputElement} (document.getElementById('autocomplete')),
//     {types: ['geocode']});

// When the user selects an address from the dropdown, populate the address
// fields in the form.
// autocomplete.addListener('place_changed', fillInAddress);
// }
// function fillInAddress() {
//     place = autocomplete.getPlace();

//     var addressNumberGoogle, addressGoogle, zipGoogle, cityGoogle;
//     for (var i = 0; i < place.address_components.length; i++) {
//         var addressType = place.address_components[i]['types'];
//         if (addressType == 'street_number') {
//             addressNumberGoogle = place.address_components[i]['long_name'];
//         }
//         if (addressType == 'route') {
//             addressGoogle = place.address_components[i]['long_name'];
//         }
//         if (!($.inArray('locality', addressType)) ) {
//             console.log ('jeste za: ' + addressType );
//             cityGoogle = place.address_components[i]['long_name'];
//         }
//         if (addressType == 'postal_code') {
//             zipGoogle = place.address_components[i]['long_name'];
//         }
//     }
//     var addressFullGoogle = addressGoogle;
//     if (addressNumberGoogle) {
//     addressFullGoogle = addressNumberGoogle + ', ' + addressGoogle;
//     }
//     console.log('place je: ' + place);
//     $('#streetAddress').val(addressFullGoogle);
//     $('#cityAddress').val(cityGoogle);
//     $('#zipCodeAddress').val(zipGoogle);
//     section4Address = $('#streetAddress').val();
//     section4City = $('#cityAddress').val();
//     section4Zip = $('#zipCodeAddress').val();
//     testSection4a();
// }