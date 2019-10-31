const baseConfig = require('./base.config')

const id = `${baseConfig.id}-bridge-deployed`

module.exports = {
  ...baseConfig.bridgeConfig,
  ...baseConfig.bridgeMapperConfig,
  event: 'BridgeMappingUpdated',
  name: `watcher-${id}`,
  id
}
