/*
 * Self-hosted fork runtime unlock.
 *
 * Source change: packages/twenty-server/src/engine/core-modules/enterprise/
 * services/enterprise-plan.service.ts treats this deployment as enterprise
 * licensed. This preload applies the same behaviour to an already-compiled
 * twenty-server image without rebuilding the whole monorepo.
 *
 * Use only on images built from this fork (or matching upstream dist layout).
 */
const {
  EnterprisePlanService,
} = require('/app/packages/twenty-server/dist/engine/core-modules/enterprise/services/enterprise-plan.service.js');

const proto = EnterprisePlanService.prototype;

proto.hasValidSignedEnterpriseKey = function () {
  return true;
};

proto.hasValidEnterpriseValidityToken = function () {
  return true;
};

proto.isValidWithFreshToken = async function () {
  return true;
};

proto.isValid = function () {
  return true;
};

proto.getLicenseInfo = async function () {
  return {
    isValid: true,
    licensee: this.cachedKeyPayload?.licensee ?? 'Self-hosted fork',
    expiresAt: null,
    subscriptionId: null,
  };
};
