<?php
/*
Template Name: Booking Form 2
*/
if ( !defined('ABSPATH') ){ die(); }

global $avia_config;

/*
 * get_header is a basic wordpress function, used to retrieve the header.php file in your theme directory.
*/
get_header();

// trim values in GET array
foreach ($_GET as $key => $value){
	$_GET[$key] = trim($value);
}

// output html-encoded query string if it is present
function pass($id){
	if(isset($_GET[$id])){
		echo htmlentities($_GET[$id],ENT_QUOTES,'UTF-8',false);
	}else{
		echo '';
	}
}

if( get_post_meta(get_the_ID(), 'header', true) != 'no') echo avia_title();

do_action( 'ava_after_main_title' );
?>
<div class='container_wrap container_wrap_first main_color <?php avia_layout_class( 'main' ); ?>'>
	<div class='container'>

		<main class='template-page content  <?php avia_layout_class( 'content' ); ?> units' <?php avia_markup_helper(array('context' => 'content','post_type'=>'page'));?>>
			<div id='mainWrapperHomeSnappersForm'>
				<div id='mainWrapperHomeSnappers'>
					<section id='section1' class='allSections'>
						<h3>Have you worked with Home Snappers Before?</h3>
						<div id='section1FirstButtons' class='allTwoButtonsWidth'>
							<div id='yesFirstButton' class='allButtons sprite sprite-yes'>
							</div>
							<div id='noFirstButton' class='allButtons sprite-no sprite'>
							</div>
							<div class='clear'></div>
						</div>
					</section>
					<section id='section2' class='allSections'>
						<h3>Fill out form as..</h3>
						<div id='sectionSecondThreeButtons' class='allThreeButtonsWidth'>
							<div id='agentButton' class='allButtons sprite2  sprite-2_0_agent'>
							</div>
							<div id='homeownerButton' class='allButtons sprite2  sprite-2_2_homeowner'>
							</div>
							<div id='assistantButton' class='allButtons sprite2  sprite-2_1_assistant'>
							</div>
							<div class='clear'></div>
							<div id='inputWrapperSection2' class='allotherButtonsBlock'><input id='otherSection2Input' class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="fill" value="<?php pass('otherSection2Input') ?>" >
							</div>
							<div id='otherSection2NormalHover' class='allotherButtonsNone sprite-other spriteOther'>
							</div>
						</div>
					</section>
					<section id='section3' class='allSections'>
						<h3>Would you like your info or an agent's info on the virtual tour?</h3>
						<div id='section3FirstButtons' class='allTwoButtonsWidth'>
							<div id='mineFirstButton' class='allButtons sprite4 sprite-4_0_mine'>
							</div>
							<div id='anAgentsFirstButton' class='allButtons sprite4 sprite-4_0_mine sprite-4_1_an-agent_s'>
							</div>
							<div class='clear'></div>
						</div>
						<h3>Your Info</h3>
						<div id='yourInfo'>
							<div id='yourInfoForm' >
								<input type="text" id='firstName' value="<?php pass('firstName') ?>" class='cssForInputs' placeholder="First Name"/>
								<input type="text" id='lastName' value="<?php pass('lastName') ?>" class='cssForInputs' placeholder="Last Name"/>
								<input type="tel" id='phoneName' value="<?php pass('phoneName') ?>" class='cssForInputs' placeholder="Phone #"/>
							</div>
							<div class='clear'></div>
							<div id='yourInfoForm2'>
								<input type="text" id='emailName' value="<?php pass('emailName') ?>" class='cssForInputs' placeholder="Email"/>
								<input type="text" id='confirmName' value="<?php pass('confirmName') ?>" class='cssForInputs' placeholder="Confirm Email"/>
								<div class='clear'></div>
								<div id='testEmailCorrcetion'>
									<h3> Did you mean ? </h3>
									<h2 id='pForSuggYourInput'></h2>
									<div class='suggInputButtonDivs' id='yesYourSuggInput'>
										<h2> Yes </h2>
									</div>
									<div class='suggInputButtonDivs' id='noYourSuggInput'>
										<h2> NO </h2>
									</div>
									<div class='clear'></div>
								</div>
							</div>
							<div class='clear'></div>
						</div>
						<h3>Agent's Info</h3>
						<div id='agentInfo'>
							<div id='agentInfoForm'>
								<input type="text" id='agentsFirstName' value="<?php pass('agentsFirstName') ?>" class='cssForInputs' placeholder="First Name"/>
								<input type="text" id='agentsLastName' value="<?php pass('agentsLastName') ?>" class='cssForInputs' placeholder="Last Name"/>
								<input type="text" id='agentsPhoneName' value="<?php pass('agentsPhoneName') ?>" class='cssForInputs' placeholder="Phone #"/>
							</div>
							<div class='clear'></div>
							<div id='agentInfoForm2'>
								<input type="text" id='agentsEmailName' value="<?php pass('agentsEmailName') ?>" class='cssForInputs' placeholder="Enter Email"/>
								<input type="text" id='agentsConfirmName' value="<?php pass('agentsConfirmName') ?>" class='cssForInputs' placeholder="Confirm Email"/>
								<div class='clear'></div>
								<div id='testAgentsEmailCorrcetion'>
									<h3> Did you mean ? </h3>
									<h2 id='pForSuggAgentsInput'></h2>
									<div class='suggInputButtonDivs' id='yesAgentsSuggInput'>
										<h2> Yes </h2>
									</div>
									<div class='suggInputButtonDivs' id='noAgentsSuggInput'>
										<h2> NO </h2>
									</div>
									<div class='clear'></div>
								</div>
							</div>
							<div class='clear'></div>
						</div>
					</section>
					<section id='section4' class='allSections'>
						<h3>The property is..</h3>
						<div id='section4FirstButtons' class='allTwoButtonsWidth'>
							<div id='vacantFirstButton' class='allButtons sprite11 sprite-11_0_vacant'>
							</div>
							<div id='occupiedFirstButton' class='allButtons sprite11 sprite-11_1_occupied'>
							</div>
							<div class='clear'></div>
						</div>
						<div id='vacantFormMain' class='allThreeButtonsWidth'>
							<h3>Address of Property Being Photographed</h3>
							<!-- <div id="locationField">
							<input id="autocomplete" placeholder="Enter your address" type="text"></input>
							</div> -->
							<div id='vacantForm'>
								<input type="text" id='streetAddress' value="<?php pass('streetAddress') ?>" class='cssForInputs' placeholder="Street Address"/>
							</div>
							<div id='vacantForm2'>
								<input type="text" id='cityAddress' value="<?php pass('cityAddress') ?>" class='cssForInputs' placeholder="City"/>
								<input id='zipCodeAddress' value="<?php pass('zipCodeAddress') ?>" class='cssForInputs' placeholder="ZIP Code"/>
							</div>
							<div class='clear'></div>
						</div>
						<div id='listSqftMain' class='allThreeButtonsWidth '>
							<div id='listPriceMain'>
								<h3>List Price</h3>
								<div id='listPriceForm'>
									<input id='listPrice' value="<?php pass('listPrice') ?>" class='cssForInputs' placeholder=""/>
								</div>
							</div>
							<div id='sqftMain'>
								<h3>sqft.</h3>
								<div id='sqftForm'>
									<input id='sqftInput' value="<?php pass('sqftInput') ?>" class='cssForInputs' placeholder=""/>
								</div>
							</div>
							<div class='clear'></div>
						</div>
					</section>
					<section id='section4YesNo' class='allSections'>
						<h3>Would you like us to contact the homeowner to setup the appointment?</h3>
						<div id='section4ynButtons' class='allTwoButtonsWidth'>
							<div id='section4YesButton1' class='allButtons sprite sprite-yes'>
							</div>
							<div id='section4NoButton2' class='allButtons sprite-no sprite'>
							</div>
							<div class='clear'></div>
						</div>
						<div id='hoeownerForm' class='allThreeButtonsWidth'>
							<h3>Homeowner's Info</h3>
								<input type="text" id='firstNameHomeowner' value="<?php pass('firstNameHomeowner') ?>" class='cssForInputs' placeholder="First Name"/>
								<input type="text" id='lastNameHomeowner' value="<?php pass('lastNameHomeowner') ?>" class='cssForInputs' placeholder="Last Name"/>
							<div class='clear'></div>
							<input type="" id='phoneHomeowner' value="<?php pass('phoneHomeowner') ?>" class='cssForInputs' placeholder="Phone #"/>
							<div class='clear'></div>
							<div id='homeOwnEmailSugg'>
								<h3> Did you mean ? </h3>
								<h2 id='pForSuggHomeOwnInput'></h2>
								<div class='suggInputButtonDivs' id='yesHomeOwnSuggInput'>
									<h2> Yes </h2>
								</div>
								<div class='suggInputButtonDivs' id='noHomeOwnSuggInput'>
									<h2> NO </h2>
								</div>
								<div class='clear'></div>
							</div>
						</div>
					</section>
					<section id='section5' class='allSections'>
						<h3>When will the home be ready to have the photos taken?</h3>
						<div id='section5TwoButtons' class='allTwoButtonsWidth'>
							<div id='ImmediButton' class='allButtons sprite20 sprite-20_0_immediately'>
							</div>
							<div id='specificButton' class='allButtons sprite20 sprite-20_1_specific-date'>
							</div>
							<div class='clear'></div>
							<div id='inputWrapperSection5' class='allotherButtonsBlock'><input id='otherSection5Input' value="<?php pass('otherSection5Input') ?>" class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="">
							</div>
							<div id='otherSection5NormalHover' class='allotherButtonsNone sprite-other spriteOther prite-other-active-2'>
							</div>
						</div>
						<div id='dateSpecificMain' class='allTwoButtonsWidth'>
							<div id='dateSpecificInput'>
								<input type="text" name="" class='cssForInputs' placeholder="Select Date">
							</div>
						</div>
					</section>
					<section id='section6' class='allSections'>
						<h3>Do we need an appointment or can we go as soon as possible?</h3>
						<div id='section6TwoButtons' class='allTwoButtonsWidth' >
							<div id='goAnyButton' class='allButtons sprite26 sprite-goanytime-grey'>
							</div>
							<div id='needAppoButton' class='allButtons sprite26 sprite-26_1_need-appointment'>
							</div>
							<div class='clear'></div>
							<div id='inputWrapperSection6' class='allotherButtonsBlock'> <input id='otherSection6Input' value="<?php pass('otherSection6Input') ?>" class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="">
							</div>
							<div id='otherSection6NormalHover' class='allotherButtonsNone sprite-other spriteOther prite-other-active-2'>
							</div>
						</div>
					</section>
					<section id='section7' class='allSections'>
						<h3>Do we need an appointment time or can we go anytime on the specified date?</h3>
						<div id='section7TwoButtons' class='allTwoButtonsWidth'>
							<div id='goAnyButtonSection7' class='allButtons sprite26 sprite-goanytime-grey'>
							</div>
							<div id='needAppoButtonSection7' class='allButtons sprite26 sprite-26_1_need-appointment'>
							</div>
							<div class='clear'></div>
							<div id='inputWrapperSection7' class='allotherButtonsBlock'><input id='otherSection7Input' value="<?php pass('otherSection7Input') ?>" class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="">
							</div>
							<div id='otherSection7NormalHover' class='allotherButtonsNone sprite-other spriteOther prite-other-active-2'>
							</div>
						</div>
					</section>
					<section id='section82FirstTwoButtons' class='allSections'>
						<h3>Method of Entry</h3>
							<div id='section82TwoButtons' class='allTwoButtonsWidth' >
							<div id='comboLockButtonSection82' class='allButtons sprite28 sprite-28_0_combo'>
							</div>
							<div id='supraIboxButtonSection82' class='allButtons sprite28 sprite-28_1_supra'>
							</div>
							<div class='clear'></div>
							<div id='inputWrapperSection82' class='allotherButtonsBlock'><input id='otherSection82Input' class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="">
							</div>
							<div id='otherSection82NormalHover' class='allotherButtonsNone sprite-other spriteOther prite-other-active-2'>
							</div>
						</div>
					</section>
					<section id='section8' class='allSections'>
						<h3 id='headSection8H3'>Method of Entry</h3>
						<div id='section8ThreeButtons' class='allThreeButtonsWidth'>
							<div id='comboLockButtonSection8' class='allButtons sprite28 sprite-28_0_combo'>
							</div>
							<div id='meetSomeButtonSection8' class='allButtons sprite28 sprite-28_2_meeting'>
							</div>
							<div id='supraIboxButtonSection8' class='allButtons sprite28 sprite-28_1_supra'>
							</div>
							<div class='clear'></div>
							<div id='inputWrapperSection8' class='allotherButtonsBlock'> <input id='otherSection8Input' value="<?php pass('otherSection8Input') ?>" class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="">
							</div>
							<div id='otherSection8NormalHover' class='allotherButtonsNone sprite-other spriteOther prite-other-active-2'>
							</div>
						</div>
						<div id='combinationSection8InputMain'>
							<h3>Combination</h3>
							<div id='combinationSection8Form' class='allTwoButtonsWidth'>
								<input id='combinationSection8Input' value="<?php pass('combinationSection8Input') ?>" class='cssForInputs' id='comInputSec8'/>
							</div>
						</div>
						<div class='clear'></div>
						<div id='supraBoxCbsCodeSection8' class='allTwoButtonsWidth'>
							<p>The CBS code is always 7 digits. If you do not have the code, you can call your board and they will give it to you.</p>
							<h3>CBS Code (7 digits)</h3>
							<div id='listPriceForm2'>
								<input id='cbsCodeSection8Input' value="<?php pass('cbsCodeSection8Input') ?>" class='cssForInputs' id='listPrice' maxlength="7"/>
							</div>
							<h6>0 of 7 digits</h6>
						</div>
					</section>
					<section id='section9' class='allSections allHighiWidthSections'>
						<h3>Interior/Exterior Photos</h3>
						<div id='separationDiv5Buttons1'>
							<div id='section9FiveButtons1' class='allButtonsSmall sprite35 sprite-35_0_15photos'>
							</div>
							<div id='section9FiveButtons2' class='allButtonsSmall sprite35 sprite-35_1_25photos'>
							</div>
							<div id='section9FiveButtons3' class='allButtonsSmall sprite35 sprite-35_2_36photos'>
							</div>
						</div>
						<div id='separationDiv5Buttons2'>
							<div id='section9FiveButtons4' class='allButtonsSmall sprite35 sprite-35_3_50photos'>
							</div>
							<div id='section9FiveButtons5' class='allButtonsSmall spriteNone sprite-none'>
							</div>
						</div>
						<div class='clear'></div>
						<div id='inputWrapperSection9' class='allotherButtonsBlock'><input id='otherSection9Input' value="<?php pass('otherSection9Input') ?>" class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="">
						</div>
						<div id='otherSection9NormalHover' class='allotherButtonsNone sprite-other spriteOther prite-other-active-2'>
						</div>
					</section>
					<section id='section10' class='allSections allHighiWidthSections'>
						<h3>Would you like drone photos and/or drone video?</h3>
						<div id='section10TwoButtons'>
							<div id='yesDroneMain' class='sprite37 sprite-37_0_yes-drone'>
							</div>
							<div id='noDroneMain' class='sprite37 sprite-37_1_no-drone'>
							</div>
							<h6>Aerial photos taken from the sky.</h6>
						</div>
						<div id='droneImageSelection'>
							<img src="https://ikactest.000webhostapp.com/images/bookingformaerial.jpg">
						</div>
						<div class='clear'></div>
					</section>
					<section id='section11' class='allSections'>
						<h3>Aerial Photos, Aerial Video, or Both?</h3>
						<div id='section11ThreeButtons' class='allThreeButtonsWidth'>
							<div id='photosOnlyButtonSection11' class='allButtons sprite38 sprite-38_1_photosonly'>
							</div>
							<div id='videoOnlyButtonSection11' class='allButtons sprite38 sprite-38_0_video-only'>
							</div>
							<div id='photosAndVideoButtonSection11' class='allButtons sprite38 sprite-38_2_photosvideo'>
							</div>
							<div class='clear'></div>
						</div>
						<div id='textBoxAboutPhotos_Videos'>
							<h3>What would you like the aerial photos/video to focus on?</h3>
							<div id='textBoxSmall'>
								<textarea id='textarea' placeholder="Lot size, proximity to lake, etc." class='cssForInputs'><?php pass('textarea') ?></textarea>
							</div>
						</div>
					</section>
					<section id='section11a5Aerial' class='allSections allHighiWidthSections'>
						<h3>Aerial/Drone Photos</h3>
						<div id='section11aFiveButtons1' class='allButtonsSmall sprite40 sprite-40_0_1aerial'>
						</div>
						<div id='section11aFiveButtons2' class='allButtonsSmall sprite40 sprite-40_1_5aerial'>
						</div>
						<div id='section11aFiveButtons3' class='allButtonsSmall sprite40 sprite-40_2_10aerial'>
						</div>
						<div id='section11aFiveButtons4' class='allButtonsSmall sprite40 sprite-40_3_20aerial'>
						</div>
						<div id='section11aFiveButtons5' class='allButtonsSmall spriteNone sprite-none'>
						</div>
						<div class='clear'></div>
						<div id='inputWrapperSection11a' class='allotherButtonsBlock'> <input id='otherSection11aInput' value="<?php pass('otherSection11aInput') ?>" class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="">
						</div>
						<div id='otherSection11aNormalHover' class='allotherButtonsNone sprite-other spriteOther prite-other-active-2'>
						</div>
					</section>
					<section id='section11b' class='allSections'>
						<div id='threeVideoHd' class='allHighiWidthSections'>
							<h3>HD Video</h3>
							<div id='firstVideoHdsection10'>
								<a href='' target="blank">
								  <img src=""></img>
								</a>
							</div>
							<div id='secondVideoHdsection10'>
								<a href='' target="blank">
								  <img src=""></img>
								</a>
							</div>
							<div id='thirdVideoHdsection10'>
								<a href='' target="blank">
								  <img src=""></img>
								</a>
							</div>
							<div class='clear'></div>
						</div>
					</section>
					<section id='section12' class='allSections allThreeButtonsWidth'>
						<div id='section12FiveButtons1' class='allButtons spriteOtherNone sprite-none1'>
						</div>
						<div id='section12FiveButtons3' class='allButtons sprite41 sprite-cine299grey'>
						</div>
						<div id='section12ThreeButtons2' class='allButtons sprite41 sprite-walkthrough-video175grey'>
						</div>
						<div class='clear'></div>
					</section>
					<section id='section13' class='allSections allThreeButtonsWidth'>
						<div id='section13ThreeButtons1' class='allButtons sprite42 sprite-aerialonly49 '>
						</div>
						<div id='section13ThreeButtons3' class='allButtons sprite42 sprite-cinematic-aerial299'>
						</div>
						<div id='section13ThreeButtons2' class='allButtons sprite42 sprite-walkthrough-aerial199'>
						</div>
						<div class='clear'></div>
					</section>
					<section id='section14' class='allSections'>
						<div id='bigCinematicPresented'>
							<a href='https://www.homesnappers.com/3d-vr-tour/' target="blank">
								<img src="https://ikactest.000webhostapp.com/images/dollhouse-booking-form.jpg">
							</a>
						</div>
					</section>
					<section id='section15' class='allSections'>
						<h3>Would you like a Dollhouse Virtual Reality Tour? (Price is below)</h3>
						<div id='section15TwoButtons' class='allTwoButtonsWidth'>
							<div id='yesSection15Button' class='allButtons sprite sprite-yes'>
							</div>
							<div id='noSection15Button' class='allButtons  sprite-no sprite'>
							</div>
							<div class='clear'></div>
						</div>
						<h3>Dollhouse price for this property</h3>
						<div id='dollhiusePriceSection15' class='cssForInputs'></div>
					</section>
					<section id='section16' class='allSections allThreeButtonsWidth'>
						<h3>Additional Premier Offerings</h3>
						<div id='section16ThreeButtons1' class='allButtons sprite48 sprite-flyer-grey'>
						</div>
						<div id='section16ThreeButtons2' class='allButtons sprite48 sprite-twilight-grey'>
						</div>
						<div id='section16ThreeButtons3' class='allButtons sprite48 sprite-youtube-grey'>
						</div>
						<div class='clear'></div>
					</section>
					<section id='section17' class='allSections'>
						<div id='leftSection17ButtonsGroup'>
							<h3>Photo Turnaround</h3>
							<div id='nextDaySection17ButtonLeft1' class='lastButtonsAll sprite49 sprite-next-day-12-free-grey'>
							</div>
							<div id='nextDaySection17ButtonLeft2' class='lastButtonsAll sprite49 sprite-same-day-by-9-grey'>
							</div>
							<div id='nextDaySection17ButtonLeft3' class='lastButtonsAll sprite49 sprite-4-hours-49-grey'>
							</div>
						</div>
						<div id='rightSection17ButtonsGroup' >
						   <h3>Video Turnaround</h3>
						   <div id='nextDaySection17ButtonRight1' class='lastButtonsAll sprite54 sprite-2-business-days-by-12-free-grey'>
						   </div>
						   <div id='nextDaySection17ButtonRight2' class='lastButtonsAll sprite54 sprite-next-business-day-by-9-25-grey'>
						   </div>
						   <div id='nextDaySection17ButtonRight3' class='lastButtonsAll sprite54 sprite-next-business-day-by-12-49-grey'>
						   </div>
						</div>
						<div class='clear'></div>
						<section id='section18a' class='allSections'>
							<h3>How did you hear about us?</h3>
							<div id='section18aFirstButtons' class='allTwoButtonsWidth'>
								<div id='googleButton' class='allButtons sprite60 sprite-60_0_google'>
								</div>
								<div id='referralButton' class='allButtons sprite60 sprite-60_1_referral'>
								</div>
								<div class='clear'></div>
							</div>
							<div id='inputWrapperSection18a' class='allotherButtonsBlock'> <input id='otherSection18aInput' value="<?php pass('otherSection18aInput') ?>" class='allotherButtonsInput spriteOther sprite-other-active-2' type="text" name="">
							</div>
							<div id='otherSection18aNormalHover' class='allotherButtonsNone sprite-other spriteOther prite-other-active-2'>
							</div>
							<div id='referralForm' class='allThreeButtonsWidth'>
								<h3>How did you hear about us?</h3>
								<input type="text" id='firstNameReferral' value="<?php pass('firstNameReferral') ?>" class='cssForInputs' placeholder="First Name" />
								<input type="text" id='lastNameReferral' value="<?php pass('lastNameReferral') ?>" class='cssForInputs' placeholder="Last Name" />
								<div class='clear'></div>
							</div>
						</section>
					</section>
					<section id='section18' class='allSections'>
						<div id='textAdditionalNotes'>
							<h3>Additional Notes</h3>
							<div id='textBoxSmallAdditionalNotes'>
								<textarea id='additional_notes' class='cssForInputs'><?php pass('additional_notes') ?></textarea>
							</div>
							<h6>eg. Get photo of inside of garage, open all closet doors, etc.</h6>
						</div>
						<div id='sectionPromoCode'>
							<input id='sectionPromoCodeInput' value="<?php pass('sectionPromoCodeInput') ?>" class='cssForInputs' placeholder='Promo Code' name="">
						</div>
						<div id='submitButton' class='spriteOtherSubmit sprite-submit'></div>
					</section>

					<input class="inviz" id="workedBefore" value="<?php pass('workedBefore') ?>" >
					<input class="inviz" id="fillAs" value="<?php pass('fillAs') ?>" >
					<input class="inviz" id="yourOrAgents" value="<?php pass('yourOrAgents') ?>" >
					<input class="inviz" id="propertyOccupied" value="<?php pass('propertyOccupied') ?>" >
					<input class="inviz" id="contactHomeowner" value="<?php pass('contactHomeowner') ?>" >
					<input class="inviz" id="whenHomeReady" value="<?php pass('whenHomeReady') ?>" >
					<input class="inviz" id="goASAP" value="<?php pass('goASAP') ?>" >
					<!-- no need for 'go anytime on spec date' if calendar doesnt work automatically -->
					<input class="inviz" id="methodOfEntryAnytime" value="<?php pass('methodOfEntryAnytime') ?>" >
					<input class="inviz" id="methodOfEntry" value="<?php pass('methodOfEntry') ?>" >
					<input class="inviz" id="intExtPic" value="<?php pass('intExtPic') ?>" >
					<input class="inviz" id="dronePhotos" value="<?php pass('dronePhotos') ?>" >
					<input class="inviz" id="aerialPVOrBoth" value="<?php pass('aerialPVOrBoth') ?>" >
					<input class="inviz" id="AerDroPhoto" value="<?php pass('AerDroPhoto') ?>" >
					<input class="inviz" id="HDVideoNone" value="<?php pass('HDVideoNone') ?>" >
					<input class="inviz" id="HDVideoAerial" value="<?php pass('HDVideoAerial') ?>" >
					<input class="inviz" id="dollHouse" value="<?php pass('dollHouse') ?>" >

					<div id='invizFields'>
						<p id='invizP1Distance'></p>
						<p id='invizP2TravelTime'></p>
						<p id='invizP3FormattedAdress'></p>
					</div>
					<!-- <div id='pricingWrapper'>
						<p id ='intExtPhotoPriceLine'> Interior/exterior photos <span class='priceHolder'> 150</span></p>
						<p id ='dronePhotoPriceLine'> Drone photos <span class='priceHolder'> 150</span></p>
						<p id ='walkthroughCinematicPriceLine'> HD Video <span class='priceHolder'> 150</span></p>
						<p id ='dollHousePriceLine'> Doll House <span class='priceHolder'> 150</span></p>
						<p id ='FlyerPriceLine'> Flyer <span class='priceHolder'> 150</span></p>
						<p id ='twillightPriceLine'> Twillight <span class='priceHolder'> 150</span></p>
						<p id ='youTubePriceLine'> Youtube <span class='priceHolder'> 150</span></p>
						<p id ='photoTurnaroundPriceLine'> photoTurnaround <span class='priceHolder'> 150</span></p>
						<p id ='videoTurnaroundPriceLine'> videoTurnaround <span class='priceHolder'> 150</span></p>
						<p id ='largeHousePriceLine'> Extra for 4k+ sqrt <span class='priceHolder'> 25</span></p>
						<h2 id ='sumPriceLine'> SUM <span class='priceHolder'> 150</span></h2>
					</div> -->
				</div>

				<div id="open_report_bug">
					<p> Report Bug </p>
				</div>

				<div id="bug_report_wrapper">
					<div id="report_bug">
						<div id="bug_top">
							<h4> Report a Bug </h4>
							<button id="bug_close">
								<span class="ui-button-icon ui-icon ui-icon-closethick">
							</button>
						</div>
						<form id="report_bug_form">	
							<h4>
								Oh no! Help us squash it and help you get your appointment booked.
							</h4>

							<fieldset id="describe_field">
								<h5>
									Describe your issue below <span>*</span>
								</h5>
								<textarea id="bug_describe">
									
								</textarea>								
							</fieldset>

							<fieldset>
								<h5>
									Your email address <span>*</span>
								</h5>
								<input type="email" id="bug_email">
							</fieldset>
							<button type="submit"> Submit Report</button>
						</form>
					</div>
				</div>
			</div><!-- end mainWrapperHomeSnappersForm-->
			<?php
			/* Run the loop to output the posts.
			* If you want to overload this in a child theme then include a file
			* called loop-page.php and that will be used instead.
			*/

			$avia_config['size'] = avia_layout_class( 'main' , false) == 'fullsize' ? 'entry_without_sidebar' : 'entry_with_sidebar';
			get_template_part( 'includes/loop', 'page' );
			?>

		</main><!--end content-->

		<?php
		//get the sidebar
		$avia_config['currently_viewing'] = 'page';
		get_sidebar();
		?>
	</div><!--end container-->

</div><!-- close default .container_wrap element -->

<?php get_footer(); ?>