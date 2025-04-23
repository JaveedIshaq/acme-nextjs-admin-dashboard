// .pnpmfile.cjs
module.exports = {
    hooks: {
      afterAllResolved: (lockfile, context) => {
        lockfile.settings = lockfile.settings || {};
        lockfile.settings.approvedPackages = lockfile.settings.approvedPackages || {};
        lockfile.settings.approvedPackages['bcrypt@5.1.1'] = true;
        return lockfile;
      },
    },
  };