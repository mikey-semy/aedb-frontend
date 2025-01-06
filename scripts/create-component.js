/**
 * Создает компонент
 * @param {string} componentName Имя компонента
 * @param {string} componentDir Путь к компоненту
 * @param {string} componentPath Путь к компоненту
 * @param {object} templates Шаблоны файлов
 *
 * @usage yarn create:component ComponentName Common/ComponentName
 * where ComponentName - имя компонента
 * Common/ComponentName - путь к компоненту (опционально)
 */
const fs = require('fs');
const path = require('path');

// Проверка наличия аргументов
if (!process.argv[2]) {
    console.error('Укажите имя компонента');
    process.exit(1);
}

const componentName = process.argv[2];
const componentDir = process.argv[3] || '';

const componentPath = path.join(__dirname, '../src/components', componentDir, componentName);

const templates = {
    'index.ts': `export { default } from './${componentName}';`,

    [`${componentName}.tsx`]: `
import { ${componentName}Types } from './${componentName}.types';
import { ${componentName}Container } from './${componentName}.styles';

const ${componentName}: React.FC<${componentName}Types> = () => {
    return (
        <${componentName}Container>

        </${componentName}Container>
    );
};

export default ${componentName};`,

    [`${componentName}.types.ts`]: `
export interface ${componentName}Types {
    children?: React.ReactNode;
}`,

    [`${componentName}.styles.ts`]: `
import styled from 'styled-components';

export const ${componentName}Container = styled.div\`
    // styles
\`;`,

    [`${componentName}.api.ts`]: `
import api, { handleApiResponse, handleApiError } from '@/api';
import { ${componentName}Types } from './${componentName}.types';

`
};

// Создание структуры
try {
    // Проверка наличия директории
    fs.mkdirSync(componentPath, { recursive: true });
    // Создание файлов в директории
    Object.entries(templates).forEach(([filename, content]) => {
        fs.writeFileSync(
            path.join(componentPath, filename),
            content.trim()
        );
    });
    /// Добавление экспорта в index.ts
    const indexPath = path.join(__dirname, '../src/components/index.ts');
    const exportLine = `export { default as ${componentName} } from './${componentDir}/${componentName}';\n`;
    fs.appendFileSync(indexPath, exportLine);

    console.log(`✅ Компонент ${componentName} создан в ${componentPath}`);
} catch (error) {
    console.error('❌ Ошибка при создании компонента:', error);
    process.exit(1);
}
