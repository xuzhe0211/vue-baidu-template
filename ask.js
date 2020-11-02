/**
 * 共同库
 */
module.exports = function(options){
	return [
		{
			type: 'input',
			name: 'name',
			message: '项目名称',
			default: options.name || ''
		}
	];
};