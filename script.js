(function(){

  /* ====================== CLOCK ====================== */
  function tickClock(){
    var d = new Date();
    var s = d.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false});
    document.getElementById('liveclock').textContent = s + ' IST';
  }
  tickClock();
  setInterval(tickClock, 1000);

  /* ====================== LANGUAGE SWITCHER ======================
     Static interface text in English, Hindi, and Kannada, since this
     tool is built for Bengaluru's traffic control rooms where all
     three are in everyday use. Event records themselves stay in the
     language they were originally logged in.
  */
  var I18N = {
    en: {
      btnLabel: 'English',
      title: 'ByteBell \u00b7 Event Congestion Control',
      subtitle: 'Bengaluru corridor network \u2014 live status',
      feedLabel: 'Feed connected',
      legendUnplanned: 'Unplanned \u00b7 active',
      legendPlanned: 'Planned \u00b7 scheduled',
      legendResolved: 'Resolved \u00b7 logged',
      hintBanner: 'Click a marker to open the response plan for that location.',
      chipAll: 'All events',
      chipUnplanned: 'Unplanned \u00b7 active',
      chipPlanned: 'Planned \u00b7 scheduled',
      chipResolved: 'Resolved',
      emptyKicker: 'No event selected',
      emptyTitle: 'Pick a point on the map',
      emptyBody: 'Every marker carries a congestion forecast and a ready-to-issue response plan \u2014 personnel, barricade points, and the diversion route.',
      emptyLi1: 'Amber markers are scheduled. Plan ahead of time.',
      emptyLi2: 'Red markers are live. Act now.',
      emptyLi3: 'Teal markers are closed out, with a clearance note for the file.',
      projectedImpact: 'Projected impact',
      against: 'against normal flow for this stretch',
      resourcePlan: 'Resource plan',
      personnelLbl: 'Traffic personnel recommended on site',
      vehiclesLbl: 'Marshal / pilot vehicles suggested',
      barricadingPts: 'Barricading points',
      diversionPlan: 'Diversion plan',
      eventRecord: 'Event record',
      start: 'Start', endLbl: 'End', statusSince: 'Status since',
      requiresResource: 'Requires resource', roadType: 'Road type',
      yes: 'Yes', no: 'No',
      fromLastClosure: 'From the last closure here'
    },
    hi: {
      btnLabel: '\u0939\u093f\u0902\u0926\u0940',
      title: '\u092c\u093e\u0907\u091f\u092c\u0947\u0932 \u00b7 \u0907\u0935\u0947\u0902\u091f \u0915\u0902\u091c\u0947\u0938\u094d\u091a\u0928 \u0915\u0902\u091f\u094d\u0930\u094b\u0932',
      subtitle: '\u092c\u0947\u0902\u0917\u0932\u0941\u0930\u0941 \u0915\u0949\u0930\u093f\u0921\u094b\u0930 \u0928\u0947\u091f\u0935\u0930\u094d\u0915 \u2014 \u0932\u093e\u0907\u0935 \u0938\u094d\u0925\u093f\u0924\u093f',
      feedLabel: '\u092b\u0940\u0921 \u0915\u0928\u0947\u0915\u094d\u091f\u0947\u0921',
      legendUnplanned: '\u0905\u0928\u093f\u092f\u094b\u091c\u093f\u0924 \u00b7 \u0938\u0915\u094d\u0930\u093f\u092f',
      legendPlanned: '\u092f\u094b\u091c\u093f\u0924 \u00b7 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924',
      legendResolved: '\u0938\u0941\u0932\u091d\u093e \u0939\u0941\u0906 \u00b7 \u0926\u0930\u094d\u091c \u0915\u093f\u092f\u093e \u0917\u092f\u093e',
      hintBanner: '\u0909\u0938 \u0938\u094d\u0925\u093e\u0928 \u0915\u0940 \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u092f\u094b\u091c\u0928\u093e \u0916\u094b\u0932\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0915\u093f\u0938\u0940 \u092d\u0940 \u092e\u093e\u0930\u094d\u0915\u0930 \u092a\u0930 \u0915\u094d\u0932\u093f\u0915 \u0915\u0930\u0947\u0902\u0964',
      chipAll: '\u0938\u092d\u0940 \u0918\u091f\u0928\u093e\u090f\u0902',
      chipUnplanned: '\u0905\u0928\u093f\u092f\u094b\u091c\u093f\u0924 \u00b7 \u0938\u0915\u094d\u0930\u093f\u092f',
      chipPlanned: '\u092f\u094b\u091c\u093f\u0924 \u00b7 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924',
      chipResolved: '\u0938\u0941\u0932\u091d\u093e \u0939\u0941\u0906',
      emptyKicker: '\u0915\u094b\u0908 \u0918\u091f\u0928\u093e \u091a\u0941\u0928\u0940 \u0928\u0939\u0940\u0902 \u0917\u0908',
      emptyTitle: '\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u092a\u0930 \u090f\u0915 \u092c\u093f\u0902\u0926\u0941 \u091a\u0941\u0928\u0947\u0902',
      emptyBody: '\u0939\u0930 \u092e\u093e\u0930\u094d\u0915\u0930 \u092e\u0947\u0902 \u092d\u0940\u0921\u093c\u092d\u093e\u0921\u093c \u0915\u093e \u092a\u0942\u0930\u094d\u0935\u093e\u0928\u0941\u092e\u093e\u0928 \u0914\u0930 \u090f\u0915 \u0924\u0948\u092f\u093e\u0930 \u092f\u094b\u091c\u0928\u093e \u0939\u094b\u0924\u0940 \u0939\u0948 \u2014 \u0938\u094d\u091f\u093e\u092b, \u092c\u0948\u0930\u093f\u0915\u0947\u0921\u093f\u0902\u0917 \u092a\u0949\u0907\u0902\u091f \u0914\u0930 \u0921\u093e\u0907\u0935\u0930\u094d\u091c\u0928 \u0930\u0942\u091f\u0964',
      emptyLi1: '\u0915\u0947\u0938\u0930\u093f\u092f\u093e \u092e\u093e\u0930\u094d\u0915\u0930 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0939\u0948\u0902\u0964 \u092a\u0939\u0932\u0947 \u0938\u0947 \u092f\u094b\u091c\u0928\u093e \u092c\u0928\u093e\u090f\u0902\u0964',
      emptyLi2: '\u0932\u093e\u0932 \u092e\u093e\u0930\u094d\u0915\u0930 \u0938\u0915\u094d\u0930\u093f\u092f \u0939\u0948\u0902\u0964 \u0905\u092d\u0940 \u0915\u093e\u0930\u094d\u0930\u0935\u093e\u0908 \u0915\u0930\u0947\u0902\u0964',
      emptyLi3: '\u091f\u0940\u0932 \u092e\u093e\u0930\u094d\u0915\u0930 \u092c\u0902\u0926 \u0939\u094b \u091a\u0941\u0915\u0947 \u0939\u0948\u0902, \u0938\u093e\u0925 \u092e\u0947\u0902 \u0915\u094d\u0932\u093f\u092f\u0930\u0947\u0902\u0938 \u0928\u094b\u091f \u0939\u0948\u0964',
      projectedImpact: '\u0905\u0928\u0941\u092e\u093e\u0928\u093f\u0924 \u092a\u094d\u0930\u092d\u093e\u0935',
      against: '\u0907\u0938 \u0939\u093f\u0938\u094d\u0938\u0947 \u0915\u0947 \u0938\u093e\u092e\u093e\u0928\u094d\u092f \u092a\u094d\u0930\u0935\u093e\u0939 \u0915\u0940 \u0924\u0941\u0932\u0928\u093e \u092e\u0947\u0902',
      resourcePlan: '\u0938\u0902\u0938\u093e\u0927\u0928 \u092f\u094b\u091c\u0928\u093e',
      personnelLbl: '\u0938\u093e\u0907\u091f \u092a\u0930 \u0905\u0928\u0941\u0936\u0902\u0938\u093f\u0924 \u091f\u094d\u0930\u0948\u092b\u093f\u0915 \u0915\u0930\u094d\u092e\u0940',
      vehiclesLbl: '\u0938\u0941\u091d\u093e\u090f \u0917\u090f \u092e\u093e\u0930\u094d\u0936\u0932 / \u092a\u093e\u092f\u0932\u091f \u0935\u093e\u0939\u0928',
      barricadingPts: '\u092c\u0948\u0930\u093f\u0915\u0947\u0921\u093f\u0902\u0917 \u092a\u0949\u0907\u0902\u091f',
      diversionPlan: '\u0921\u093e\u0907\u0935\u0930\u094d\u091c\u0928 \u092f\u094b\u091c\u0928\u093e',
      eventRecord: '\u0918\u091f\u0928\u093e \u0930\u093f\u0915\u0949\u0930\u094d\u0921',
      start: '\u0936\u0941\u0930\u0942', endLbl: '\u0938\u092e\u093e\u092a\u094d\u0924', statusSince: '\u0907\u0938 \u0938\u092e\u092f \u0938\u0947 \u0938\u094d\u0925\u093f\u0924\u093f',
      requiresResource: '\u0938\u0902\u0938\u093e\u0927\u0928 \u0906\u0935\u0936\u094d\u092f\u0915', roadType: '\u0938\u0921\u093c\u0915 \u0915\u093e \u092a\u094d\u0930\u0915\u093e\u0930',
      yes: '\u0939\u093e\u0902', no: '\u0928\u0939\u0940\u0902',
      fromLastClosure: '\u092f\u0939\u093e\u0902 \u0915\u0947 \u092a\u093f\u091b\u0932\u0947 \u0915\u094d\u0932\u094b\u095b\u0930 \u0938\u0947'
    },
    kn: {
      btnLabel: '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1',
      title: '\u0cac\u0cc8\u0c9f\u0ccd\u200c\u0cac\u0cc6\u0cb2\u0ccd \u00b7 \u0c88\u0cb5\u0cc6\u0c82\u0c9f\u0ccd \u0c95\u0c82\u0c9c\u0cc6\u0cb8\u0ccd\u0c9a\u0ca8\u0ccd \u0c95\u0c82\u0c9f\u0ccd\u0cb0\u0ccb\u0cb2\u0ccd',
      subtitle: '\u0cac\u0cc6\u0c82\u0c97\u0cb3\u0cc2\u0cb0\u0cc1 \u0c95\u0cbe\u0cb0\u0cbf\u0ca1\u0cbe\u0cb0\u0ccd \u0c9c\u0cbe\u0cb2 \u2014 \u0cb2\u0cc8\u0cb5\u0ccd \u0cb8\u0ccd\u0ca5\u0cbf\u0ca4\u0cbf',
      feedLabel: '\u0cab\u0cc0\u0ca1\u0ccd \u0cb8\u0c82\u0caa\u0cb0\u0ccd\u0c95\u0cbf\u0ca4\u0cb5\u0cbe\u0c97\u0cbf\u0ca6\u0cc6',
      legendUnplanned: '\u0c85\u0ca8\u0cbf\u0caf\u0ccb\u0c9c\u0cbf\u0ca4 \u00b7 \u0cb8\u0c95\u0ccd\u0cb0\u0cbf\u0caf',
      legendPlanned: '\u0caf\u0ccb\u0c9c\u0cbf\u0ca4 \u00b7 \u0ca8\u0cbf\u0c97\u0ca6\u0cbf\u0caa\u0ca1\u0cbf\u0cb8\u0cbf\u0ca6',
      legendResolved: '\u0caa\u0cb0\u0cbf\u0cb9\u0cb0\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6 \u00b7 \u0ca6\u0cbe\u0c96\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6',
      hintBanner: '\u0c86 \u0cb8\u0ccd\u0ca5\u0cb3\u0c95\u0ccd\u0c95\u0cc6 \u0caa\u0ccd\u0cb0\u0ca4\u0cbf\u0c95\u0ccd\u0cb0\u0cbf\u0caf\u0cc6 \u0caf\u0ccb\u0c9c\u0ca8\u0cc6 \u0ca4\u0cc6\u0cb0\u0cc6\u0caf\u0cb2\u0cc1 \u0caf\u0cbe\u0cb5\u0cc1\u0ca6\u0cc7 \u0cae\u0cbe\u0cb0\u0ccd\u0c95\u0cb0\u0ccd \u0c95\u0ccd\u0cb2\u0cbf\u0c95\u0ccd \u0cae\u0cbe\u0ca1\u0cbf.',
      chipAll: '\u0c8e\u0cb2\u0ccd\u0cb2\u0cbe \u0c98\u0c9f\u0ca8\u0cc6\u0c97\u0cb3\u0cc1',
      chipUnplanned: '\u0c85\u0ca8\u0cbf\u0caf\u0ccb\u0c9c\u0cbf\u0ca4 \u00b7 \u0cb8\u0c95\u0ccd\u0cb0\u0cbf\u0caf',
      chipPlanned: '\u0caf\u0ccb\u0c9c\u0cbf\u0ca4 \u00b7 \u0ca8\u0cbf\u0c97\u0ca6\u0cbf\u0caa\u0ca1\u0cbf\u0cb8\u0cbf\u0ca6',
      chipResolved: '\u0caa\u0cb0\u0cbf\u0cb9\u0cb0\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6',
      emptyKicker: '\u0caf\u0cbe\u0cb5\u0cc1\u0ca6\u0cc7 \u0c98\u0c9f\u0ca8\u0cc6 \u0c86\u0caf\u0ccd\u0c95\u0cc6\u0caf\u0cbe\u0c97\u0cbf\u0cb2\u0ccd\u0cb2',
      emptyTitle: '\u0ca8\u0c95\u0ccd\u0cb7\u0cc6\u0caf\u0cb2\u0ccd\u0cb2\u0cbf \u0c92\u0c82\u0ca6\u0cc1 \u0cac\u0cbf\u0c82\u0ca6\u0cc1\u0cb5\u0ca8\u0ccd\u0ca8\u0cc1 \u0c86\u0cb0\u0cbf\u0cb8\u0cbf',
      emptyBody: '\u0caa\u0ccd\u0cb0\u0ca4\u0cbf \u0cae\u0cbe\u0cb0\u0ccd\u0c95\u0cb0\u0ccd \u0ca6\u0c9f\u0ccd\u0c9f\u0ca3\u0cc6 \u0cae\u0cc1\u0ca8\u0ccd\u0cb8\u0cc2\u0c9a\u0ca8\u0cc6 \u0cae\u0ca4\u0ccd\u0ca4\u0cc1 \u0cb8\u0cbf\u0ca6\u0ccd\u0ca7 \u0caa\u0ccd\u0cb0\u0ca4\u0cbf\u0c95\u0ccd\u0cb0\u0cbf\u0caf\u0cc6 \u0caf\u0ccb\u0c9c\u0ca8\u0cc6\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0cca\u0c82\u0ca6\u0cbf\u0cb0\u0cc1\u0ca4\u0ccd\u0ca4\u0ca6\u0cc6 \u2014 \u0cb8\u0cbf\u0cac\u0ccd\u0cac\u0c82\u0ca6\u0cbf, \u0cac\u0ccd\u0caf\u0cbe\u0cb0\u0cbf\u0c95\u0cc7\u0ca1\u0ccd \u0caa\u0cbe\u0caf\u0cbf\u0c82\u0c9f\u0ccd \u0cae\u0ca4\u0ccd\u0ca4\u0cc1 \u0ca1\u0cc8\u0cb5\u0cb0\u0ccd\u0cb7\u0ca8\u0ccd \u0cae\u0cbe\u0cb0\u0ccd\u0c97.',
      emptyLi1: '\u0c95\u0cc6\u0c82\u0caa\u0cc1 \u0cac\u0ca3\u0ccd\u0ca3\u0ca6 \u0cae\u0cbe\u0cb0\u0ccd\u0c95\u0cb0\u0ccd\u200c\u0c97\u0cb3\u0cc1 \u0ca8\u0cbf\u0c97\u0ca6\u0cbf\u0caa\u0ca1\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6. \u0cae\u0cc1\u0c82\u0c9a\u0cbf\u0ca4\u0cb5\u0cbe\u0c97\u0cbf \u0caf\u0ccb\u0c9c\u0ca8\u0cc6 \u0cae\u0cbe\u0ca1\u0cbf.',
      emptyLi2: '\u0c95\u0cc6\u0c82\u0caa\u0cc1 \u0cae\u0cbe\u0cb0\u0ccd\u0c95\u0cb0\u0ccd\u200c\u0c97\u0cb3\u0cc1 \u0ca8\u0cc7\u0cb0 \u0caa\u0ccd\u0cb0\u0cb8\u0cbe\u0cb0\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf\u0cb5\u0cc6. \u0c88\u0c97\u0cb2\u0cc7 \u0c95\u0ccd\u0cb0\u0cae \u0c95\u0cc8\u0c97\u0cca\u0cb3\u0ccd\u0cb3\u0cbf.',
      emptyLi3: '\u0c9f\u0cc0\u0cb2\u0ccd \u0cae\u0cbe\u0cb0\u0ccd\u0c95\u0cb0\u0ccd\u200c\u0c97\u0cb3\u0cc1 \u0cae\u0cc1\u0c95\u0ccd\u0ca4\u0cbe\u0caf\u0c97\u0cca\u0c82\u0ca1\u0cbf\u0cb5\u0cc6, \u0ca6\u0cbe\u0c96\u0cb2\u0cc6\u0c97\u0cbe\u0c97\u0cbf \u0c9f\u0cbf\u0caa\u0ccd\u0caa\u0ca3\u0cbf \u0c87\u0ca6\u0cc6.',
      projectedImpact: '\u0ca8\u0cbf\u0cb0\u0cc0\u0c95\u0ccd\u0cb7\u0cbf\u0ca4 \u0caa\u0cb0\u0cbf\u0ca3\u0cbe\u0cae',
      against: '\u0c88 \u0cb5\u0ccd\u0caf\u0cbe\u0caa\u0ccd\u0ca4\u0cbf\u0caf\u0cb2\u0ccd\u0cb2\u0cbf \u0cb8\u0cbe\u0cae\u0cbe\u0ca8\u0ccd\u0caf \u0cb8\u0c82\u0c9a\u0cbe\u0cb0\u0c95\u0ccd\u0c95\u0cc6 \u0cb9\u0ccb\u0cb2\u0cbf\u0cb8\u0cbf\u0ca6\u0cb0\u0cc6',
      resourcePlan: '\u0cb8\u0c82\u0caa\u0ca8\u0ccd\u0cae\u0cc2\u0cb2 \u0caf\u0ccb\u0c9c\u0ca8\u0cc6',
      personnelLbl: '\u0cb8\u0ccd\u0ca5\u0cb3\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf \u0cb6\u0cbf\u0cab\u0cbe\u0cb0\u0cb8\u0cc1 \u0cae\u0cbe\u0ca1\u0cb2\u0cbe\u0ca6 \u0c9f\u0ccd\u0cb0\u0cbe\u0cab\u0cbf\u0c95\u0ccd \u0cb8\u0cbf\u0cac\u0ccd\u0cac\u0c82\u0ca6\u0cbf',
      vehiclesLbl: '\u0cb6\u0cbf\u0cab\u0cbe\u0cb0\u0cb8\u0cc1 \u0cae\u0cbe\u0ca1\u0cb2\u0cbe\u0ca6 \u0cae\u0cbe\u0cb0\u0ccd\u0cb7\u0cb2\u0ccd / \u0caa\u0cc8\u0cb2\u0c9f\u0ccd \u0cb5\u0cbe\u0cb9\u0ca8\u0c97\u0cb3\u0cc1',
      barricadingPts: '\u0cac\u0ccd\u0caf\u0cbe\u0cb0\u0cbf\u0c95\u0cc7\u0ca1\u0ccd \u0caa\u0cbe\u0caf\u0cbf\u0c82\u0c9f\u0ccd\u200c\u0c97\u0cb3\u0cc1',
      diversionPlan: '\u0ca1\u0cc8\u0cb5\u0cb0\u0ccd\u0cb7\u0ca8\u0ccd \u0caf\u0ccb\u0c9c\u0ca8\u0cc6',
      eventRecord: '\u0c98\u0c9f\u0ca8\u0cc6 \u0ca6\u0cbe\u0c96\u0cb2\u0cc6',
      start: '\u0caa\u0ccd\u0cb0\u0cbe\u0cb0\u0c82\u0cad',
      endLbl: '\u0cb8\u0cae\u0cbe\u0caa\u0ccd\u0ca4\u0cbf',
      statusSince: '\u0cb8\u0ccd\u0ca5\u0cbf\u0ca4\u0cbf \u0c87\u0c82\u0ca6\u0cbf\u0ca8\u0cbf\u0c82\u0ca6',
      requiresResource: '\u0cb8\u0c82\u0caa\u0ca8\u0ccd\u0cae\u0cc2\u0cb2 \u0c85\u0c97\u0ca4\u0ccd\u0caf',
      roadType: '\u0cb0\u0cb8\u0ccd\u0ca4\u0cc6\u0caf \u0cb5\u0cbf\u0ca7',
      yes: '\u0cb9\u0ccc\u0ca6\u0cc1',
      no: '\u0c87\u0cb2\u0ccd\u0cb2',
      fromLastClosure: '\u0c87\u0cb2\u0ccd\u0cb2\u0cbf\u0ca8 \u0c95\u0cca\u0ca8\u0cc6\u0caf \u0cae\u0cc1\u0c9a\u0ccd\u0c9a\u0cc1\u0cb5\u0cbf\u0c95\u0cc6\u0caf\u0cbf\u0c82\u0ca6'
    }
  };

  var currentLang = 'en';
  function t(key){
    var dict = I18N[currentLang] || I18N.en;
    return (key in dict) ? dict[key] : I18N.en[key];
  }

  function applyStaticI18n(){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
  }

  function setLanguage(lang){
    currentLang = lang;
    document.getElementById('langBtnLabel').textContent = t('btnLabel');
    applyStaticI18n();
    // re-render whatever the panel is currently showing, in the new language
    if (selectedId){
      var ev = events.filter(function(e){ return e.id === selectedId; })[0];
      if (ev) renderPanel(ev);
    } else {
      emptyState();
    }
  }

  function initLangSwitch(){
    var wrap = document.getElementById('langSwitch');
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', wrap.classList.contains('open'));
    });
    menu.querySelectorAll('.lang-option').forEach(function(opt){
      opt.addEventListener('click', function(){
        menu.querySelectorAll('.lang-option').forEach(function(o){ o.classList.remove('active'); });
        opt.classList.add('active');
        setLanguage(opt.getAttribute('data-lang'));
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function(){ wrap.classList.remove('open'); btn.setAttribute('aria-expanded','false'); });
  }

  /* ====================== BASELINE FLOW LEVELS ======================
     Average flow by road class under normal conditions. This is the
     "no event" reference line that everything else is measured against.
  */
  var BASELINE_DEMAND = { Highway: 0.611, Street: 0.273, Residential: 0.057 };

  /* ====================== ROAD NETWORK ======================
     Corridor layout for the city map view.
  */
  var roads = [
    {id:'orr_e',  name:'Outer Ring Road \u2014 East',  type:'Highway',     corridor:'ORR East',
     d:'M 760 90 C 840 180, 860 320, 800 460 C 760 550, 720 620, 660 680'},
    {id:'orr_w',  name:'Outer Ring Road \u2014 West',  type:'Highway',     corridor:'ORR West',
     d:'M 180 110 C 120 220, 110 360, 160 480 C 200 560, 250 610, 320 660'},
    {id:'orr_n',  name:'Outer Ring Road \u2014 North', type:'Highway',     corridor:'ORR North',
     d:'M 180 110 C 320 60, 560 55, 760 90'},
    {id:'hosur',  name:'Hosur Road',                   type:'Highway',     corridor:'Hosur Road',
     d:'M 500 420 C 540 500, 600 580, 660 680'},
    {id:'bellary',name:'Bellary Road',                 type:'Highway',     corridor:'Bellary Road',
     d:'M 480 410 C 460 320, 430 200, 420 100'},
    {id:'tumkur', name:'Tumkur Road',                  type:'Highway',     corridor:'Tumkur Road',
     d:'M 470 405 C 380 350, 280 300, 190 250'},
    {id:'oldmadras', name:'Old Madras Road',            type:'Street',      corridor:'Old Madras Road',
     d:'M 520 400 C 600 350, 690 290, 740 220'},
    {id:'mysore', name:'Mysore Road',                  type:'Street',      corridor:'Mysore Road',
     d:'M 460 430 C 380 460, 300 490, 230 540'},
    {id:'mgroad', name:'Mahatma Gandhi Road',           type:'Street',      corridor:'MG Road',
     d:'M 500 380 C 540 390, 580 400, 610 420'},
    {id:'sankey', name:'Sankey Road',                   type:'Residential', corridor:'Non-corridor',
     d:'M 430 330 C 410 310, 390 295, 365 280'},
    {id:'lalbagh',name:'Lalbagh Main Road',              type:'Residential', corridor:'Non-corridor',
     d:'M 510 440 C 500 470, 495 500, 500 530'},
    {id:'jakkur', name:'Jakkur Layout Road',             type:'Residential', corridor:'Non-corridor',
     d:'M 600 200 C 620 175, 640 155, 670 140'},
    {id:'bannergh',name:'Bannerghatta Main Road',        type:'Street',      corridor:'Bannerghatta',
     d:'M 560 470 C 580 540, 600 610, 615 660'},
    {id:'mbtroad', name:'MBT Road',                      type:'Residential', corridor:'Non-corridor',
     d:'M 350 380 C 320 400, 290 415, 255 430'}
  ];

  /* ====================== EVENT LOG ======================
     Active, scheduled, and recently closed events on the network.
  */
  var events = [
    {
      id:'FKID02231', roadId:'orr_e', t:0.62, event_type:'unplanned', event_cause:'accident',
      priority:'High', status:'active', address:'Outer Ring Road, near Marathahalli junction',
      corridor:'ORR East', start_date:'2026-06-20 08:14', description:'Two-vehicle collision blocking outer lane, queue forming northbound.',
      requires_resource:true
    },
    {
      id:'FKID02244', roadId:'bellary', t:0.30, event_type:'planned', event_cause:'public_event',
      priority:'High', status:'scheduled', address:'Bellary Road, near Hebbal flyover',
      corridor:'Bellary Road', start_date:'2026-06-22 16:00', end_date:'2026-06-22 21:00',
      description:'Large public gathering, expected footfall 12,000\u201315,000, stage and barricade setup required.',
      requires_resource:true
    },
    {
      id:'FKID02198', roadId:'mgroad', t:0.55, event_type:'unplanned', event_cause:'water_logging',
      priority:'High', status:'active', address:'MG Road, near Trinity Circle',
      corridor:'MG Road', start_date:'2026-06-20 06:40',
      description:'Drain overflow after overnight rain, one lane submerged.',
      requires_resource:true
    },
    {
      id:'FKID02256', roadId:'hosur', t:0.45, event_type:'planned', event_cause:'construction',
      priority:'Low', status:'scheduled', address:'Hosur Road, near Electronic City flyover',
      corridor:'Hosur Road', start_date:'2026-06-25 22:00', end_date:'2026-06-26 05:00',
      description:'Night-time flyover joint repair, single lane closure planned.',
      requires_resource:false
    },
    {
      id:'FKID02177', roadId:'tumkur', t:0.40, event_type:'unplanned', event_cause:'tree_fall',
      priority:'Low', status:'resolved', address:'Tumkur Road, near Yeshwanthpur',
      corridor:'Tumkur Road', start_date:'2026-06-18 23:10', end_date:'2026-06-19 02:35',
      description:'Tree fall after wind storm, cleared overnight by BBMP crew.',
      requires_resource:true
    },
    {
      id:'FKID02263', roadId:'bannergh', t:0.55, event_type:'planned', event_cause:'public_event',
      priority:'High', status:'scheduled', address:'Bannerghatta Main Road, near Jayadeva junction',
      corridor:'Bannerghatta', start_date:'2026-06-23 17:30', end_date:'2026-06-23 22:00',
      description:'Marathon route closure, 6,000 expected participants plus spectators.',
      requires_resource:true
    },
    {
      id:'FKID02209', roadId:'mysore', t:0.42, event_type:'unplanned', event_cause:'pot_holes',
      priority:'Low', status:'active', address:'Mysore Road, near Rajarajeshwari Nagar',
      corridor:'Mysore Road', start_date:'2026-06-19 09:00',
      description:'Pothole cluster reported by three independent complaints, slowing both directions.',
      requires_resource:true
    },
    {
      id:'FKID02184', roadId:'oldmadras', t:0.40, event_type:'unplanned', event_cause:'vehicle_breakdown',
      priority:'High', status:'resolved', address:'Old Madras Road, near Tin Factory',
      corridor:'Old Madras Road', start_date:'2026-06-18 18:05', end_date:'2026-06-18 19:20',
      description:'Heavy vehicle breakdown blocking right lane during evening peak.',
      requires_resource:true
    },
    {
      id:'FKID02271', roadId:'orr_n', t:0.50, event_type:'planned', event_cause:'public_event',
      priority:'High', status:'scheduled', address:'Outer Ring Road North, near Hebbal',
      corridor:'ORR North', start_date:'2026-06-21 18:00', end_date:'2026-06-21 23:00',
      description:'Stadium event \u2014 historically generates sustained post-event surge.',
      requires_resource:true
    },
    {
      id:'FKID02160', roadId:'sankey', t:0.50, event_type:'unplanned', event_cause:'others',
      priority:'Low', status:'resolved', address:'Sankey Road, near Sankey Tank',
      corridor:'Non-corridor', start_date:'2026-06-17 07:15', end_date:'2026-06-17 08:00',
      description:'Civic stall setup encroaching on carriageway, cleared by local ward office.',
      requires_resource:false
    },
    {
      id:'FKID02288', roadId:'jakkur', t:0.55, event_type:'unplanned', event_cause:'water_logging',
      priority:'Low', status:'active', address:'Jakkur Layout Road, near the lake',
      corridor:'Non-corridor', start_date:'2026-06-20 05:50',
      description:'Localised waterlogging at low-lying stretch after early morning rain.',
      requires_resource:false
    },
    {
      id:'FKID02300', roadId:'lalbagh', t:0.55, event_type:'planned', event_cause:'construction',
      priority:'Low', status:'scheduled', address:'Lalbagh Main Road, west gate',
      corridor:'Non-corridor', start_date:'2026-06-24 10:00', end_date:'2026-06-24 16:00',
      description:'BWSSB pipeline work, partial road cut planned with diversion signage.',
      requires_resource:true
    }
  ];

  /* ====================== SEVERITY ENGINE ======================
     Combines the road's normal flow level with how disruptive this
     type of event tends to be, so the score stays explainable rather
     than a black box.
  */
  var CAUSE_MULTIPLIER = {
    public_event: 1.55, accident: 1.35, water_logging: 1.2, construction: 1.05,
    tree_fall: 1.0, pot_holes: 0.55, vehicle_breakdown: 1.1, others: 0.7
  };
  var PRIORITY_MULTIPLIER = { High: 1.15, Low: 0.85 };
  var TYPE_ADJUST = { unplanned: 1.08, planned: 1.0 }; // unplanned events are harder to absorb operationally

  function roadById(id){ return roads.filter(function(r){ return r.id === id; })[0]; }

  // Soft saturation instead of a hard clip: keeps high-severity events
  // distinguishable from each other instead of every "bad" case flattening to 1.0.
  function saturate(raw){ return 1 - Math.exp(-raw * 1.15); }

  function computeSeverity(ev){
    var road = roadById(ev.roadId);
    var base = BASELINE_DEMAND[road.type];
    var causeMul = CAUSE_MULTIPLIER[ev.event_cause] || 0.8;
    var prioMul = PRIORITY_MULTIPLIER[ev.priority] || 1.0;
    var typeMul = TYPE_ADJUST[ev.event_type] || 1.0;
    var raw = base * causeMul * prioMul * typeMul;
    var score = saturate(raw);
    return { score: score, raw: raw, base: base, causeMul: causeMul, prioMul: prioMul, typeMul: typeMul, road: road };
  }

  function severityTier(score){
    if (score >= 0.55) return {label:'Severe', color:'var(--redorange)'};
    if (score >= 0.25) return {label:'Elevated', color:'var(--amber)'};
    return {label:'Moderate', color:'var(--teal)'};
  }

  /* ====================== RECOMMENDATION ENGINE ====================== */
  function recommend(ev, sev){
    var score = sev.score;
    var manpower = Math.round(4 + score * 22);
    if (ev.event_cause === 'public_event' || ev.event_cause === 'procession') manpower += 8;
    var barricadePoints = Math.max(1, Math.round(score * 6));
    var vehicles = score >= 0.6 ? 2 : (score >= 0.35 ? 1 : 0);

    var barricades = [];
    for (var i=0; i<barricadePoints; i++){
      var labels = [
        'Primary approach, ' + (150 + i*120) + 'm before site',
        'Secondary lane channeliser at site boundary',
        'Pedestrian cordon, opposite footpath',
        'Junction feeder closure point',
        'Rear approach soft barricade',
        'Overflow buffer zone marker'
      ];
      barricades.push(labels[i % labels.length]);
    }

    var diversions = [];
    if (score >= 0.55){
      diversions.push({ route: ev.corridor + ' \u2192 nearest parallel arterial', note: 'Full diversion recommended for through-traffic during peak window.' });
      diversions.push({ route: 'Local feeder roads \u2192 ward internal lanes', note: 'Use for residents and last-mile access only, signpost clearly.' });
    } else if (score >= 0.3){
      diversions.push({ route: 'Single-lane shift around ' + ev.corridor, note: 'No full diversion needed; channelise around the affected lane.' });
    } else {
      diversions.push({ route: 'No diversion required', note: 'Localised slowdown only, monitor for escalation.' });
    }

    return { manpower: manpower, barricadePoints: barricadePoints, vehicles: vehicles, barricades: barricades, diversions: diversions };
  }

  /* ====================== CLOSEOUT NOTE ======================
     For resolved events: how the actual clearance time compared to
     what was expected when the event was first logged.
  */
  function learningNote(ev, sev){
    if (ev.status !== 'resolved' || !ev.end_date) return null;
    var start = new Date(ev.start_date.replace(' ', 'T'));
    var end = new Date(ev.end_date.replace(' ', 'T'));
    var mins = Math.round((end - start) / 60000);
    var expectedMins = Math.round(40 + sev.score * 160);
    var delta = mins - expectedMins;
    var deltaText = delta === 0 ? 'cleared right on schedule'
      : (delta > 0 ? ('ran ' + delta + ' min longer than expected') : ('cleared ' + Math.abs(delta) + ' min faster than expected'));
    return 'Cleared in ' + mins + ' min (expected around ' + expectedMins + ' min for this kind of closure) \u2014 ' + deltaText + '. Logged against ' + ev.corridor + ' for next time.';
  }

  /* ====================== SVG MAP RENDER ====================== */
  var svgNS = 'http://www.w3.org/2000/svg';
  var svg = document.getElementById('roadmapSvg');

  function pointOnPath(pathEl, t){
    var len = pathEl.getTotalLength();
    return pathEl.getPointAtLength(len * t);
  }

  function buildMap(){
    roads.forEach(function(r){
      var path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', r.d);
      path.setAttribute('class', 'road-path ' + r.type.toLowerCase());
      path.setAttribute('id', 'path-' + r.id);
      svg.appendChild(path);
    });

    // labels, placed near path midpoint with manual offsets for legibility
    var labelOffsets = {
      orr_e:[20,-6], orr_w:[-130,-6], orr_n:[-40,-16], hosur:[14,10],
      bellary:[-90,4], tumkur:[-150,-4], oldmadras:[14,-6], mysore:[-110,8],
      mgroad:[10,-14], sankey:[-100,-6], lalbagh:[10,4], jakkur:[12,-10],
      bannergh:[14,6], mbtroad:[-90,4]
    };
    roads.forEach(function(r){
      var pathEl = document.getElementById('path-' + r.id);
      var mid = pointOnPath(pathEl, 0.5);
      var off = labelOffsets[r.id] || [0,0];
      var t = document.createElementNS(svgNS, 'text');
      t.setAttribute('x', mid.x + off[0]);
      t.setAttribute('y', mid.y + off[1]);
      t.setAttribute('class', 'road-label');
      t.textContent = r.name;
      svg.appendChild(t);
    });
  }

  var selectedId = null;

  function markerGroupFor(ev){
    var g = document.createElementNS(svgNS, 'g');
    g.setAttribute('class', 'event-marker ' + statusClass(ev));
    g.setAttribute('data-id', ev.id);
    g.style.cursor = 'pointer';

    var pulse = document.createElementNS(svgNS, 'circle');
    pulse.setAttribute('class', 'pulse');
    var core = document.createElementNS(svgNS, 'circle');
    core.setAttribute('class', 'core');
    core.setAttribute('r', 7);

    g.appendChild(pulse);
    g.appendChild(core);
    g.addEventListener('click', function(){ selectEvent(ev.id); });
    return g;
  }

  function statusClass(ev){
    if (ev.status === 'resolved') return 'resolved';
    return ev.event_type === 'planned' ? 'planned' : 'unplanned';
  }

  function renderMarkers(filter){
    svg.querySelectorAll('.event-marker').forEach(function(n){ n.remove(); });
    events.forEach(function(ev){
      if (filter && filter !== 'all' && statusClass(ev) !== filter) return;
      var pathEl = document.getElementById('path-' + ev.roadId);
      if (!pathEl) return;
      var pos = pointOnPath(pathEl, ev.t);
      var g = markerGroupFor(ev);
      g.setAttribute('transform', 'translate(' + pos.x + ',' + pos.y + ')');
      if (ev.id === selectedId) g.classList.add('selected');
      svg.appendChild(g);
    });
  }

  /* ====================== FILTER CHIPS ====================== */
  var filters = [
    {key:'all', i18nKey:'chipAll'},
    {key:'unplanned', i18nKey:'chipUnplanned'},
    {key:'planned', i18nKey:'chipPlanned'},
    {key:'resolved', i18nKey:'chipResolved'}
  ];
  var activeFilter = 'all';
  var chipWrap = document.getElementById('filterChips');
  filters.forEach(function(f){
    var chip = document.createElement('div');
    chip.className = 'toolbar-chip' + (f.key === 'all' ? ' active' : '');
    chip.setAttribute('data-i18n', f.i18nKey);
    chip.textContent = t(f.i18nKey);
    chip.addEventListener('click', function(){
      activeFilter = f.key;
      Array.from(chipWrap.children).forEach(function(c){ c.classList.remove('active'); });
      chip.classList.add('active');
      renderMarkers(activeFilter);
    });
    chipWrap.appendChild(chip);
  });

  /* ====================== PANEL RENDER ====================== */
  var panelScroll = document.getElementById('panelScroll');

  function emptyState(){
    panelScroll.innerHTML =
      '<div class="panel-empty">' +
        '<span class="empty-kicker">' + t('emptyKicker') + '</span>' +
        '<h2>' + t('emptyTitle') + '</h2>' +
        '<p>' + t('emptyBody') + '</p>' +
        '<ul class="panel-empty-list">' +
          '<li>' + t('emptyLi1') + '</li>' +
          '<li>' + t('emptyLi2') + '</li>' +
          '<li>' + t('emptyLi3') + '</li>' +
        '</ul>' +
      '</div>';
  }

  function fmtDate(s){
    if (!s) return '\u2014';
    var d = new Date(s.replace(' ','T'));
    if (isNaN(d)) return s;
    return d.toLocaleString('en-IN', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'});
  }

  function renderPanel(ev){
    var sev = computeSeverity(ev);
    var tier = severityTier(sev.score);
    var rec = recommend(ev, sev);
    var learning = learningNote(ev, sev);
    var pct = Math.round(sev.score * 100);

    var html = '';
    html += '<div class="tag-row">';
    html += '<span class="tag ' + ev.event_type + '">' + ev.event_type + '</span>';
    html += '<span class="tag priority-' + ev.priority.toLowerCase() + '">' + ev.priority + ' priority</span>';
    html += '<span class="tag status">' + ev.status + '</span>';
    html += '</div>';

    html += '<div class="panel-id">' + ev.id + ' &middot; ' + ev.corridor + '</div>';
    html += '<h2 class="panel-title">' + causeLabel(ev.event_cause) + '</h2>';
    html += '<p class="panel-sub">' + ev.address + '. ' + (ev.description || '') + '</p>';

    html += '<div class="severity-block">';
    html += '<div class="severity-top"><span class="severity-label">' + t('projectedImpact') + '</span>' +
            '<span class="severity-value" style="color:' + tier.color + '">' + pct + '%</span></div>';
    html += '<div class="severity-bar-track"><div class="severity-bar-fill" style="width:' + pct + '%; background:' + tier.color + '"></div></div>';
    html += '<div class="severity-tier-row"><b style="color:' + tier.color + '">' + tier.label + '</b><span>' + t('against') + '</span></div>';
    html += '<div class="factor-chips">' + factorChips(ev, sev) + '</div>';
    html += '</div>';

    html += '<div class="section-label">' + t('resourcePlan') + '</div>';
    html += '<div class="rec-grid">';
    html += '<div class="rec-card"><div class="num">' + rec.manpower + '</div><div class="lbl">' + t('personnelLbl') + '</div></div>';
    html += '<div class="rec-card"><div class="num">' + rec.vehicles + '</div><div class="lbl">' + t('vehiclesLbl') + '</div></div>';
    html += '</div>';

    html += '<div class="section-label">' + t('barricadingPts') + ' (' + rec.barricadePoints + ')</div>';
    html += '<ul class="barricade-list">';
    rec.barricades.forEach(function(b, i){
      html += '<li><span class="point-idx">B' + (i+1) + '</span>' + b + '</li>';
    });
    html += '</ul>';

    html += '<div class="section-label">' + t('diversionPlan') + '</div>';
    html += '<div class="diversion-list">';
    rec.diversions.forEach(function(d){
      html += '<div class="diversion-item"><span class="diversion-route">' + d.route + '</span><span class="diversion-note">' + d.note + '</span></div>';
    });
    html += '</div>';

    html += '<div class="section-label">' + t('eventRecord') + '</div>';
    html += '<dl class="meta-grid">';
    html += '<div><dt>' + t('start') + '</dt><dd>' + fmtDate(ev.start_date) + '</dd></div>';
    html += '<div><dt>' + (ev.end_date ? t('endLbl') : t('statusSince')) + '</dt><dd>' + (ev.end_date ? fmtDate(ev.end_date) : fmtDate(ev.start_date)) + '</dd></div>';
    html += '<div><dt>' + t('requiresResource') + '</dt><dd>' + (ev.requires_resource ? t('yes') : t('no')) + '</dd></div>';
    html += '<div><dt>' + t('roadType') + '</dt><dd>' + sev.road.type + '</dd></div>';
    html += '</dl>';

    if (learning){
      html += '<div class="learning-box"><span class="lh">' + t('fromLastClosure') + '</span>' + learning + '</div>';
    }

    panelScroll.innerHTML = html;
  }

  function causeLabel(c){
    var map = {
      public_event: 'Public event', accident: 'Accident', water_logging: 'Water logging',
      construction: 'Construction', tree_fall: 'Tree fall', pot_holes: 'Potholes',
      vehicle_breakdown: 'Vehicle breakdown', others: 'Other obstruction'
    };
    return map[c] || c;
  }

  function factorChips(ev, sev){
    var chips = [];
    chips.push(sev.road.type + ' corridor');
    if (sev.causeMul >= 1.2) chips.push('high-disruption cause');
    if (ev.priority === 'High') chips.push('priority flagged');
    if (ev.event_type === 'unplanned') chips.push('no advance notice');
    else chips.push('lead time available');
    return chips.map(function(c){ return '<span class="fchip">' + c + '</span>'; }).join('');
  }

  function selectEvent(id){
    selectedId = id;
    renderMarkers(activeFilter);
    var ev = events.filter(function(e){ return e.id === id; })[0];
    if (ev) renderPanel(ev);
  }

  /* ====================== INIT ====================== */
  buildMap();
  renderMarkers('all');
  emptyState();
  initLangSwitch();

  // gentle resize-safe re-render since getPointAtLength needs layout
  window.addEventListener('resize', function(){ renderMarkers(activeFilter); });

})();
