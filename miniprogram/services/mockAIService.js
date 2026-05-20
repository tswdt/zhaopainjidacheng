const { taskManager, reportManager } = require('./managers');
const { AIExecutionPipeline } = require('./AIExecutionPipeline');

const mockAIService = {
  _delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  async processTask(taskId) {
    const task = taskManager.getTask(taskId);
    if (!task) return null;

    try {
      taskManager.updateTaskStatus(taskId, 'processing');
      taskManager.updateTaskProgress(taskId, 10);
      await this._delay(250);

      taskManager.updateTaskProgress(taskId, 30);
      await this._delay(250);

      taskManager.updateTaskProgress(taskId, 50);
      await this._delay(250);

      const pipelineResult = await AIExecutionPipeline.execute(task);

      taskManager.updateTaskProgress(taskId, 70);
      await this._delay(200);

      task.promptPayload = pipelineResult.promptPayload;
      task.rawResponse = pipelineResult.rawResponse;
      task.validationValid = pipelineResult.validationValid;
      task.validationErrors = pipelineResult.validationErrors || [];
      task.repairApplied = pipelineResult.repairApplied;
      task.modelProvider = pipelineResult.modelProvider;
      task.modelName = pipelineResult.modelName;
      task.pipelineStatus = pipelineResult.pipelineStatus;
      task.errorMessage = pipelineResult.errorMessage || '';

      if (pipelineResult.resultData && pipelineResult.resultData.reportType && pipelineResult.resultData.reportType !== task.reportType) {
        task.reportType = pipelineResult.resultData.reportType;
      }

      taskManager.updateTaskProgress(taskId, 90);
      await this._delay(200);

      taskManager.setTaskResult(taskId, pipelineResult.resultData);
      taskManager.updateTaskProgress(taskId, 100);

      const report = reportManager.createReport(task);
      return { task, report, result: pipelineResult.resultData, pipelineResult };
    } catch (error) {
      taskManager.setTaskFailed(taskId, String(error.message || error));
      throw error;
    }
  }
};

module.exports = { mockAIService };
