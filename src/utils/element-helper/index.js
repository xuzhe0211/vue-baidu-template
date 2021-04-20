/**
 * @file 与 ElementUI 强耦合的辅助函数
 */

// 校验 el-form
export const validateELForm = (form) => {
    return new Promise((resolve) => {
        form.validate((valid) => {
            if (valid) {
                resolve(true);
            } else {
                resolve(false);
                return false;
            }
        });
    });
};

// 重置 el-form
export const resetElFrom = (form) => {
    form.resetFields();
};

export const clearValidate = (form) => {
    form.clearValidate();
};

// 设置 el-table 的 cell 值为空时显示的字符
export const getElCellEmptyText = (row, column, emptyText = '') => {
    const key = column.property || column.prop;
    const val = row[key];
    if (val === undefined || val === null) {
        return emptyText;
    }
    return val;
};

// 用于 el-table 的 cell 的格式化工具，接受 column.formatter 作为参数，返回格式化后的字符
export const formatterElCellContent = (formatter, row, column) => {
    if (formatter && typeof formatter === 'function') {
        return formatter(row, column) || getElCellEmptyText(row, column);
    }
    return getElCellEmptyText(row, column);
};
