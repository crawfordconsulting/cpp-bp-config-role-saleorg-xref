sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"cppbpconfigsaleorgxref/test/integration/pages/BpConfigSaleRoleAllList.gen",
	"cppbpconfigsaleorgxref/test/integration/pages/BpConfigSaleRoleAllObjectPage.gen",
	"cppbpconfigsaleorgxref/test/integration/pages/BpConfigSaleRoleObjectPage.gen"
], function (JourneyRunner, BpConfigSaleRoleAllListGenerated, BpConfigSaleRoleAllObjectPageGenerated, BpConfigSaleRoleObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('cppbpconfigsaleorgxref') + '/test/flp.html#app-preview',
        pages: {
			onTheBpConfigSaleRoleAllListGenerated: BpConfigSaleRoleAllListGenerated,
			onTheBpConfigSaleRoleAllObjectPageGenerated: BpConfigSaleRoleAllObjectPageGenerated,
			onTheBpConfigSaleRoleObjectPageGenerated: BpConfigSaleRoleObjectPageGenerated
        },
        async: true
    });

    return runner;
});

