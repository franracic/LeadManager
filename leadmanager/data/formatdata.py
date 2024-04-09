from itertools import product

import numpy as np
import pandas as pd
from google.analytics.data_v1beta import BetaAnalyticsDataClient

import os



os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.join(os.path.dirname(__file__),'keys\Soco.json')
client = BetaAnalyticsDataClient()

def format_report_by_index(response):
    row_index_names = [header.name for header in response.dimension_headers]
    row_header = []
    for i in range(len(row_index_names)):
        row_header.append([row.dimension_values[i].value for row in response.rows])
    
    row_index_named = pd.MultiIndex.from_arrays(np.array(row_header), names = np.array(row_index_names))
    metric_names = [header.name for header in response.metric_headers]
    data_values = []
    for i in range(len(metric_names)):
        data_values.append([row.metric_values[i].value for row in response.rows])
    if not data_values[0]:
        row_index_named = pd.MultiIndex.from_arrays(np.array( [["Empty"] for _ in range(len(row_index_names))]), names = np.array(row_index_names))
        data_values = [["0"] for _ in range(len(metric_names))]
    output = pd.DataFrame(data = np.transpose(np.array(data_values)), index = row_index_named, columns = metric_names)
    print(output)
    print(output.loc[pd.IndexSlice[:, ['ORD', 'DSM']], ['dep_time', 'dep_delay']])
    if len(row_index_names)>1:
        output = output.groupby(level=0).apply(lambda x: x.droplevel(0).to_dict(orient = "index")).to_list()
    else:
        output = output.groupby(level=0, group_keys=False).apply(lambda x: x.to_dict(orient="records")).to_dict()
    return output

def format_report(response):
    row_index_names = [header.name for header in response.dimension_headers]
    row_header = []
    for i in range(len(row_index_names)):
        row_header.append([row.dimension_values[i].value for row in response.rows])
    metric_names = [header.name for header in response.metric_headers]
    metric_values = []
    for i in range(len(metric_names)):
        metric_values.append([row.metric_values[i].value for row in response.rows])
    output = pd.DataFrame(data = np.transpose(row_header+metric_values), columns = (row_index_names + metric_names))
    if len(row_index_names)>1:
        row_header = [list(set(i)) for i in row_header]
        output = pd.concat([output,pd.DataFrame(list(product(*row_header)),columns=row_index_names)]).drop_duplicates(subset = row_index_names).sort_values(by=list(reversed(row_index_names))).fillna(0).drop(columns=row_index_names[:-1]).groupby(row_index_names[-1])
        grouped_data = {}
        for position, header in enumerate(row_index_names):
            grouped_data[header] = row_header[position]
        for header in row_header[-1]:
            grouped_data[header] = output.get_group(header).drop(columns=row_index_names[-1])
        return grouped_data
    return output

def format_batch(request):
    dataFrameNames = ["traffic","day","country","search"]
    responses = client.batch_run_reports(request)
    output_responses = {}
    for position,response in enumerate(responses.reports):
        output_responses[dataFrameNames[position]] = format_report(response)
    return output_responses